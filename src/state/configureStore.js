// @format
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./ducks/index";
import createLogger from "./middlewares/logger";
import { loadState, saveState } from "./localStorage";

const loggerMiddleware = createLogger();

const configureStore = () => {
  const store = createStore(
    rootReducer,
    loadState(),
    applyMiddleware(thunkMiddleware, loggerMiddleware),
  );

  store.subscribe(() => {
    saveState({
      cart: store.getState().cart,
    });
  });

  return store;
};

export default configureStore;
