import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Chat from '../../pages/Chat';

function AuthorizedRoutes() {
  return (
    <Switch>
      <Route path="/">
        <Chat />
      </Route>
    </Switch>
  );
}

export default AuthorizedRoutes;
