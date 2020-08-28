import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect} from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import VideoRoomPage from '../VideoRoomPage/VideoRoomPage'

import userService from '../../utils/userService'
import SignupPage from '../SignupPage/SignupPage';

import Lobby from '../Lobby/Lobby';
import NightOwlLogo from '../../components/NightOwlLogo/NightOwlLogo';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
    }
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });

  }

  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path='/' render={() =>
            userService.getUser() ?
            <LandingPage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
            :
            <Redirect to='/lobby' />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage
              history={history}
              handleSignupOrLogin={this.handleSignupOrLogin}
            />
          } />
          <Route exact path={'/videorooms/:id'} render={(props) => (
            userService.getUser() ?
            <VideoRoomPage
              {...props}
              user={this.state.user}
            />
            :
            <Redirect to='login' />
          )} />
          <Route exact pat='/lobby' render={({ history }) =>
            <Lobby
              history={history}
              user={this.state.user}
              handleLogout={this.handleLogout}
            />
          } />
          <Route exact path='/logo' render={() =>
            <NightOwlLogo />
        } />
        </Switch>
      </div>
    );
  }
}

export default App;


