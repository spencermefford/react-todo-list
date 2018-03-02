import React from 'react';
import { hot } from 'react-hot-loader'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import './Main.css';

import TodoList from "./TodoList";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route component={TodoList} />
        </Switch>
      </div>
    </Router>
  );
};

export default hot(module)(App);