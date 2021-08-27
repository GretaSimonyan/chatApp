import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../../pages/Home';

function UnauthorizedRoutes() {
  return (
    <Switch>
      <Route path="">
        <Home />
      </Route>
    </Switch>
  );
}

export default UnauthorizedRoutes;
