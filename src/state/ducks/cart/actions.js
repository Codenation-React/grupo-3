import * as types from './types';

export const addToCart = (product, quantity) => ({
  type: types.ADD,
  product,
  quantity,
});

export const changeQuantity = (product, quantity) => ({
  type: types.CHANGE_QUANTITY,
  product,
  quantity,
});

export const removeFromCart = (index) => ({
  type: types.REMOVE,
  index,
});

export const clearCart = () => ({
  type: types.CLEAR,
});

export const setCart = (cart) => ({
  type: types.SET_CART,
  cart,
});
