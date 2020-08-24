import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import VideoRoomPage from '../VideoRoomPage/VideoRoomPage'
import userService from '../../utils/userService'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    }
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
          <Route exact path='/videoroom' render={() =>
            <VideoRoomPage />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
