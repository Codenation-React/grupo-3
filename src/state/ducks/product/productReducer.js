import * as types from './types';

// const INITIAL_STATE = {
//   products: [],
// };

const productReducer = (state = [], action) => {
  switch (action.type) {
    case types.FETCH_LIST_COMPLETED:
      return [...state, ...action.products];

    default:
      return state;
  }
};

export default productReducer;
