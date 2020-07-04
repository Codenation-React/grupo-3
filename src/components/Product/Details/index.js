// @format
import React, { useState } from "react";
import Card from "../Card";
import { connect } from "react-redux";
import { v1 as uuid } from "uuid";

import "./styles.css";

const Controls = ({ product }) => {
  const { sizes, regular_price, name, installments } = product[0];
  const [isSelected, setSelected] = useState("");

  return (
    <div className="product__content">
      <h3 className="product__name">{name}</h3>
      <div>
        <span className="product__price product__price--to">
          {regular_price}
        </span>
        <span className="product__price product__price--installments">
          {installments}
        </span>
      </div>
      <div className="product__sizes">
        <p className="product__sizes__title">Escolha o tamanho:</p>
        <div className="product__btn-group">
          {sizes &&
            sizes.map((size) => (
              <button
                className={`product__filter ${
                  isSelected === size.size ? "product__filter--selected" : ""
                }`}
                onClick={() => setSelected(size.size)}
              >
                {size.size}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

const Details = (props) => {
  const { state, product } = props;
  const style = props.match.params.style;

  return (
    <div>
      <Card className="products__box" key={uuid()} {...product} />
      <Controls product={product} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const product = state.product.list.filter((product) => {
    return product.style === ownProps.match.params.style;
  });

  return {
    product,
  };
};

export default connect(mapStateToProps, null)(Details);
