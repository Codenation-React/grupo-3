// @format
import React, { useState } from 'react';
import Card from '../Card';
import { connect } from 'react-redux';
import { v1 as uuid } from 'uuid';

import './styles.css';

const Controls = ({ product }) => {
  const {
    sizes,
    regular_price,
    name,
    installments,
    on_sale,
    actual_price,
  } = product;
  const [isSelected, setSelected] = useState('');

  return (
    <div className="product__content">
      <h3 className="product__name">{name}</h3>
      <div className="product__pricing">
        {on_sale && (
          <span className="product__price product__price--from">
            {regular_price}
          </span>
        )}
        <span className="product__price product__price--to">
          {actual_price}
        </span>
        <span className="product__price product__price--installments">
          {installments}
        </span>
      </div>
      <div className="product__sizes">
        <p className="product__sizes__title">Escolha o tamanho:</p>
        <div className="product__btn-group">
          {sizes &&
            sizes.map(
              (size) =>
                size.available && (
                  <button
                    key={uuid()}
                    className={`product__filter ${
                      isSelected === size.size
                        ? 'product__filter--selected'
                        : ''
                    }`}
                    onClick={() => setSelected(size.size)}
                  >
                    {size.size}
                  </button>
                )
            )}
        </div>
      </div>
      <div className="product__actions">
        <button className="product__add-to-cart">Adicionar à Sacola</button>
      </div>
    </div>
  );
};

const Details = (props) => {
  const { product } = props;

  return (
    <div className="product__detail">
      <Card
        className="products__box"
        key={uuid()}
        {...product}
        showPrices={false}
      />
      <Controls product={product} />
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const product = state.product.list.find((product) => {
    return product.style === ownProps.match.params.style;
  });

  return {
    product,
  };
};

export default connect(mapStateToProps, null)(Details);
