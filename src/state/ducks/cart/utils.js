export const productPositionInCart = (cart, product) => {
  return cart.map(item => item.product.id).indexOf(product.id);
};

export const newCartItem = (product, quantity) => {
  return {
    product,
    quantity,
  };
};
