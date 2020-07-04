// @format
import React from "react";
import Card from "../Card";
import { connect } from "react-redux";
import { v1 as uuid } from "uuid";

const Controls = ({ product }) => {
  const { sizes, regular_price, name, installments } = product[0];

  return (
    <div>
      <h1>{name}</h1>
      <div>
        <span>{regular_price}</span>
        <span>{installments}</span>
      </div>

      <div>Escolha o tamanho:</div>
      <div>{sizes && sizes.map(size => <span>{size.size}</span>)}</div>
    </div>
  );
};

const Details = props => {
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
  const product = state.product.list.filter(product => {
    return product.style === ownProps.match.params.style;
  });

  return {
    product,
  };
};

export default connect(mapStateToProps, null)(Details);
