export const getProduct = (state, style) => {
  return state.find((product) => {
    return product.style === style;
  });
};

export const getProductByName = (state, name) => {
  return state.filter((product) => {
    return product.name.toLowerCase().includes(name.toLowerCase());
  });
};
