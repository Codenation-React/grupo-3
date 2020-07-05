import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './ducks/index';
import createLogger from './middlewares/logger';

const loggerMiddleware = createLogger();

const configureStore = () => {
  return createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, loggerMiddleware)
  );
};

export default configureStore;
