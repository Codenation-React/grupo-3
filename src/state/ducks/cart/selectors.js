export const getCartQuantity = (state) =>
  state.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

export const getCartItemQuantity = (cart, id) => {
  return cart.find((item) => item.product.id === id).quantity;
};
