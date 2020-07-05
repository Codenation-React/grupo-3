import * as types from './types';

export const addToCart = (product) => ({
  type: types.ADD,
  product,
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
