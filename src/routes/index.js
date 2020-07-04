import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Grid from "../components/Product/Grid"

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Grid} />
  </Switch>
);

export default Routes;
