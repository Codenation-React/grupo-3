// @format
import React from "react";
import "./styles.css";
import { useDispatch } from "react-redux";

import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../../../state/ducks/cart/operations";

const MiniProduct = ({ product, showCartControls = false }) => {
  const dispatch = useDispatch();
  const {
    image,
    name,
    regular_price,
    actual_price,
    installments,
    code_color,
    size,
    sku,
    quantity,
  } = product;

  const handleIncrement = () => {
    dispatch(incrementQuantity(sku));
  };

  const handleDecrement = () => {
    dispatch(decrementQuantity(sku));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(sku));
  };

  return (
    <div className="product__list__item ">
      <div className="product__list__row">
        <figure className="product__image">
          {image ? (
            <img src={image} alt={`Produto ${name}`} title={name} />
          ) : (
            <img
              src="https://via.placeholder.com/470x594/FFFFFF/?text=Imagem+Indisponível"
              alt={`Produto ${name}`}
              title={name}
            />
          )}
        </figure>
        <div className="product__list__info">
          <p className="product__list__name">{name}</p>
          {size && <p className="product__list__size">{size}</p>}
        </div>
        <div className="product__list__pricing">
          <div className="product__list__current">{actual_price}</div>
          <div className="product__list__installments">{installments}</div>
        </div>
        {showCartControls && (
          <div className="product__list_quantity">
            <button onClick={() => handleDecrement()}>-</button>
            <div className="product__list__input">{quantity}</div>
            <button onClick={() => handleIncrement()}>+</button>
          </div>
        )}
      </div>
      <div className="product__row">
        {showCartControls && (
          <button className="cart__remove" onClick={() => handleRemove()}>
            Remover Item
          </button>
        )}
      </div>
    </div>
  );
};

export default MiniProduct;
