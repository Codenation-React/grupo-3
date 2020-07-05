import { combineReducers } from 'redux';
import { getProduct } from './product/selectors';

import cartReducer from './cart';
import productReducer from './product';

export default combineReducers({
  cart: cartReducer,
  products: productReducer,
});

export const getTotal = (state) => {
  return state.cart
    .reduce((total, p) => {
      const prod = getProduct(state.products, p.code_color);
      const price = Number(
        prod.actual_price.replace('R$ ', '').replace(',', '.').trim()
      );

      return total + price * p.quantity;
    }, 0)
    .toFixed(2);
};
