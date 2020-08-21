import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';

class App extends Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">videoRange</header>
        <Route exact path='/' render={() =>
          <LandingPage />
        } />
      </div>
    );
  }
}

export default App;
