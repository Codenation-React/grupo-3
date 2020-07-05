export const getProduct = (state, code_color) => {
  return state.find((product) => {
    return product.code_color === code_color;
  });
};

export const getProductByName = (state, name) => {
  return state.filter((product) => {
    return product.name.toLowerCase().includes(name.toLowerCase());
  });
};
