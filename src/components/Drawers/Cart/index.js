// @format
import React from "react";
import MiniProduct from "../MiniProduct";
import { useSelector } from "react-redux";
import {
  getCartQuantity,
  getCartProducts,
  getTotal,
} from "../../../state/ducks/cart/selectors";

import "./styles.css";

export default function SideBar({ closeDrawer }) {
  const cartProducts = useSelector(getCartProducts);
  const cartTotal = useSelector(getTotal);
  const cartQuantity = useSelector(getCartQuantity);

  return (
    <div className="sidebar drawer-visible">
      <header className="sidebar__header">
        <div className="sidebar__header__content">
          <span className="sidebar__exit" onClick={closeDrawer}>
            <i className="fas fa-arrow-left"></i>
          </span>
          <span className="sidebar__header__title">
            Sacola ({cartQuantity})
          </span>
        </div>
      </header>

      <div className="sidebar__product-list">
        {cartProducts.length > 0 ? (
          cartProducts.map(cartProduct => (
            <MiniProduct
              key={cartProduct.sku}
              showCartControls={true}
              product={cartProduct}
            />
          ))
        ) : (
          <span className="sidebar__empty">Nenhum item encontrado :\</span>
        )}
      </div>
      <div className="cart__subtotal">
        <div className="header__title">Subtotal - R${cartTotal}</div>
      </div>
    </div>
  );
}
