// @format
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import * as reducers from "./ducks";
import { apiService, createLogger } from "./middlewares";

const configureStore = (initialState) => {
  return createStore(
    reducers,
    initialState,
    applyMiddleware(apiService, thunkMiddleware, createLogger(true))
  );
};

export default configureStore;
