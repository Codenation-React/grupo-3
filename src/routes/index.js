import React from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes = () => (
  <Switch>
    <Route
      exact
      path="/"
      children={<div className="container">Hello world</div>}
    />
  </Switch>
);

export default Routes;
