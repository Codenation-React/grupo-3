import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductsGrid from "../components/ProductsGrid";
import ProductDetails from "../components/ProductDetails";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProductsGrid} />
    <Route
      exact
      path="/produtos/:style"
      render={props => <ProductDetails {...props} />}
    />
  </Switch>
);

export default Routes;
