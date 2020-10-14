import React from 'react';
import './App.css';
import Home from './pages';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Signin from './pages/signin';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signin' component={Signin} exact />
      </Switch>
    </Router>
  );
}

export default App;
