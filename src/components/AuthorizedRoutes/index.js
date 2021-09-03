import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from '../../pages/Chat';
import Users from '../../pages/Users';

function AuthorizedRoutes() {
  return (
    <Switch>
      <Route path="/" component={Chat} exact />
      <Route path="/users" component={Users} />
      <Route path="/:convId" component={Chat} exact />
    </Switch>
  );
}

export default AuthorizedRoutes;
