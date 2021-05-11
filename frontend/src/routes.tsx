import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from 'pages/Home';
import Dashboard from 'pages/Dashboard';


const Routes: React.FC = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path='/' exact>
        <Home/>
      </Route>
      <Route path='/dashboard' exact>
        <Dashboard />
      </Route>
    </Switch>
    </BrowserRouter>
  )
}

export default Routes;