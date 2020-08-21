import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">videoRange</header>
        <Switch>
          <Route exact path='/' render={() =>
            <LandingPage />
          } />
          <Route exact path='/login' render={() =>
            <LoginPage />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
