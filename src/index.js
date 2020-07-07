import React from 'react';

import ReactDOM from 'react-dom';
import { Provider as ReduxProvider } from 'react-redux';

import App from './components/App';
import configureStore from './state/configureStore';

const store = configureStore();

ReactDOM.render(
  <ReduxProvider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ReduxProvider>,
  document.getElementById('root')
);
