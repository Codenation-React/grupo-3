import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Catalog from "../components/Product/Catalog"
import Details from "../components/Product/Details";

const Routes = () => (
  <Switch>
    <Route exact path="/" children={<Catalog />} />
    <Route path="/produto/:code_color" children={<Details />} />
  </Switch>
);

export default Routes;
