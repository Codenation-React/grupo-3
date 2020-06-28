import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ProductsGrid from "../components/ProductsGrid"
import ProductCard from "../components/ProductCard";

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ProductsGrid} />
    <Route exact path="/produto/:style" component={ProductCard} />
  </Switch>
);

export default Routes;
