import React from "react";
//
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Catalog from "../components/Product/Catalog";

const Routes = ({ App }) => (
  <BrowserRouter>
    <App>
      <Switch>
        <Route exact path="/" component={Catalog} />
      </Switch>
    </App>
  </BrowserRouter>
);

export default Routes;
