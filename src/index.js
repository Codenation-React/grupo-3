import React from "react";
import ReactDOM from "react-dom";
//
import { Provider } from "react-redux";
//
import App from "./containers/App";
import Routes from "./routes";
import configureStore from "./state/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <Routes App={App} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
