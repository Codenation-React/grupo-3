// @format
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v1 as uuid } from "uuid";

import { addToCart } from "../../../state/ducks/cart/operations";

const Controls = ({ product }) => {
  const [sizeSelectionError, setSizeSelectionError] = useState(false);

  const dispatch = useDispatch();
  const {
    sizes,
    regular_price,
    name,
    installments,
    on_sale,
    actual_price,
  } = product;

  const [sizeSelected, setSizeSelected] = useState("");

  function handleAddCart() {
    if (!sizeSelected) {
      setSizeSelectionError(true);
      return;
    }

    setSizeSelectionError(false);
    const size = sizes.find(item => item.size === sizeSelected);
    dispatch(addToCart(product.code_color, size.sku, size.size));
  }

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
        {sizeSelectionError && (
          <p className="product__sizes__warning">
            É necessário escolher um tamanho
          </p>
        )}
        <div className="product__btn-group">
          {sizes &&
            sizes.map(
              size =>
                size.available && (
                  <button
                    key={uuid()}
                    className={`product__filter ${
                      sizeSelected === size.size
                        ? "product__filter--selected"
                        : ""
                    }`}
                    onClick={() => setSizeSelected(size.size)}
                  >
                    {size.size}
                  </button>
                ),
            )}
        </div>
      </div>
      <div className="product__actions">
        <button className="product__add-to-cart" onClick={handleAddCart}>
          Adicionar à Sacola
        </button>
      </div>
    </div>
  );
};

export default Controls;
