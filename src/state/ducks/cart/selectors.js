export const getCartQuantity = (state) => state.length || 0;

export const getCartItemQuantity = (cart, id) => {
  return cart.find((item) => item.product.id === id).quantity;
};
