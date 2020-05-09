import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Weekly from './pages/Weekly';
import Top from './pages/Top';
import NavBar from './components/nav-bar/NavBar';

const Routes = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/weekly">
        <Weekly />
      </Route>
      <Route path="/top">
        <Top />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
