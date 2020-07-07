import * as types from './types';

export const addToCart = (code_color, sku, size) => ({
  type: types.ADD,
  product: {
    size,
    code_color,
    sku,
  },
});

export const decrementQuantity = (sku) => ({
  type: types.CHANGE_QUANTITY,
  sku,
  changeType: types.CART_DECREMENT,
});

export const incrementQuantity = (sku) => ({
  type: types.CHANGE_QUANTITY,
  sku,
  changeType: types.CART_INCREMENT,
});

export const removeFromCart = (sku) => ({
  type: types.REMOVE,
  sku,
});

// export const setCart = (cart) => ({
//   type: types.SET_CART,
//   cart,
// });
