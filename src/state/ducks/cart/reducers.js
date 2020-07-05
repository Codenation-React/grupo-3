// @format
import * as types from './types';

/* State shape
[
  {
    sku,
    code_color,
    quantity,
  }
]
*/

function addToCart(state, action) {
  const { product } = action;
  console.log(product);
  const index = state.findIndex((p) => p.sku === product.sku);

  if (index === -1) {
    return [...state, { ...product, quantity: 1 }];
  } else {
    const existingProduct = state[index];
    const updateExistingItem = {
      ...existingProduct,
      quantity: existingProduct.quantity + 1,
    };

    return [
      ...state.slice(0, index),
      updateExistingItem,
      ...state.slice(index + 1),
    ];
  }
}

function removeFromCart(state, action) {
  const { sku } = action;
  const index = state.findIndex((p) => p.sku === sku);

  if (index !== -1) {
    return [...state.slice(0, index), ...state.slice(index + 1)];
  } else {
    return state;
  }
}

function changeQuantity(state, action) {
  const { sku, changeType } = action;
  const index = state.findIndex((p) => p.sku === sku);

  if (index !== -1) {
    const product = state[index];

    const quantity =
      changeType === types.CART_INCREMENT
        ? product.quantity + 1
        : product.quantity === 1
        ? 1
        : product.quantity - 1;

    const updateExistingItem = {
      ...product,
      quantity,
    };

    return [
      ...state.slice(0, index),
      updateExistingItem,
      ...state.slice(index + 1),
    ];
  } else {
    return state;
  }
}

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD:
      return addToCart(state, action);

    case types.CHANGE_QUANTITY:
      return changeQuantity(state, action);

    case types.REMOVE:
      return removeFromCart(state, action);

    default:
      return state;
  }
};

export default cartReducer;
