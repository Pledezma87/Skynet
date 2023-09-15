// src/routes/index.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../components/Login.jsx';
import Register from '../components/Register.jsx';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      {/* Otras rutas si es necesario */}
    </Switch>
  );
};

export default Routes;
