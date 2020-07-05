import * as types from "./types";

// export const fetchList = () => ({
//   type: types.FETCH_LIST,
//   meta: {
//     async: true,
//     blocking: true,
//     path: "/catalog",
//     method: "GET",
//   },
// });

const receiveProducts = (products) => ({
  type: types.FETCH_LIST_COMPLETED,
  products,
});

export const fetchProdutcs = () => {
  return async (dispatch) => {
    const response = await fetch(
      'https://5f020d579e41230016d42af9.mockapi.io/api/v1/products'
    );
    const json = await response.json();
    dispatch(receiveProducts(json));
  };
};
