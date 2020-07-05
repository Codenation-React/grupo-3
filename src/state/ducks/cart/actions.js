import * as types from './types';

export const addToCart = (code_color, sku) => ({
  type: types.ADD,
  product: {
    code_color,
    sku,
  },
});

export const changeQuantity = (sku, changeType) => ({
  type: types.CHANGE_QUANTITY,
  sku,
  changeType,
});

export const removeFromCart = (sku) => ({
  type: types.REMOVE,
  sku,
});

// export const setCart = (cart) => ({
//   type: types.SET_CART,
//   cart,
// });
