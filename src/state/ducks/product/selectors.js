export const getProduct = (state, style) => {
  return state.product.list.find(product => {
    return product.style === style;
  });
}
