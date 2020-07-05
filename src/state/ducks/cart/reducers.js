// @format
import * as types from "./types";
import * as utils from "./utils";

/* State shape
[
  {
    product,
    quantity,
  }
]
*/

function addToCart(state, action) {
  const { product, quantity } = action;
  const index = utils.productPositionInCart(state, product);

  if (index === -1) {
    return [...state, utils.newCartItem(product, quantity)];
  }

  const currentItem = state[index];
  const updatedItem = {
    ...currentItem,
    quantity: currentItem.quantity + quantity,
  };
  return [...state.slice(0, index), updatedItem, ...state.slice(index + 1)];
}

function changeQuantity(state, action) {
  const { product, quantity } = action;
  const index = utils.productPositionInCart(state, product);

  const currentItem = state[index];
  const updatedItem = {
    ...currentItem,
    quantity,
  };
  return [...state.slice(0, index), updatedItem, ...state.slice(index + 1)];
}

function removeFromCart(state, action) {
  const { product } = action;
  const index = utils.productPositionInCart(state, product);

  return [...state.slice(0, index), ...state.slice(index + 1)];
}

const cartReducer = (state = [], action) => {
  switch (action.types) {
    case types.ADD:
      return addToCart(state, action);

    case types.CHANGE_QUANTITY:
      return changeQuantity();

    case types.REMOVE:
      return removeFromCart(state, action);

    default:
      return state;
  }
};

export default cartReducer;
