export const getProduct = (list, colorCode) => {
  return list.find(product => {
    return product.style === ownProps.match.params.style;
  });
}
