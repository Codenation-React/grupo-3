import { combineReducers } from 'redux';

import cartReducer from './cart';
import productReducer from './product';

export default combineReducers({
  cart: cartReducer,
  products: productReducer,
});
