// @format
import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import rootReducer from "./ducks/index";
import createLogger from "./middlewares/logger";
import { loadState, saveState } from "./localStorage";

const middleware = [thunkMiddleware];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const configureStore = () => {
  const store = createStore(
    rootReducer,
    loadState(),
    applyMiddleware(...middleware)
  );

  store.subscribe(() => {
    saveState({
      cart: store.getState().cart,
    });
  });

  return store;
};

export default configureStore;
