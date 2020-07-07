// @format
export const getCartQuantity = state => {
  return state.cart.reduce((total, item) => {
    return total + item.quantity;
  }, 0);
};

export const getCartProducts = state => {
  const cartProducts = state.cart;

  return cartProducts.map(cartProduct => {
    const product = state.products.find(
      p => p.code_color === cartProduct.code_color,
    );

    return {
      sku: cartProduct.sku,
      quantity: cartProduct.quantity,
      size: cartProduct.size,
      ...product,
    };
  });
};

export const getTotal = state => {
  return state.cart
    .reduce((total, p) => {
      const prod = state.products.find(
        product => product.code_color === p.code_color,
      );
      const price = Number(
        prod.actual_price
          .replace("R$ ", "")
          .replace(",", ".")
          .trim(),
      );

      return total + price * p.quantity;
    }, 0)
    .toFixed(2);
};
