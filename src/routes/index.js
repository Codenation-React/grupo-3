import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Catalog from "../components/Product/Catalog"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Catalog} />
  </Switch>
);

export default Routes;
