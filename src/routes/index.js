import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsGrid from "../components/ProductsGrid"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProductsGrid} />
  </Switch>
);

export default Routes;
