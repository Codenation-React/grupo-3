export const getProduct = (state, style) => {
  return state.product.list.find(product => {
    return product.style === style;
  });
}

export const getProductByName = (state, name) => {
  return state.product.list.filter(product => {
    return product.name.toLowerCase().includes(name.toLowerCase());
  })
}
