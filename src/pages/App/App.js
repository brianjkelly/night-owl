import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import VideoRoomPage from '../VideoRoomPage/VideoRoomPage'
import youtubeAPI from '../../utils/youtube-api';
import userService from '../../utils/userService'
import SignupPage from '../SignupPage/SignupPage';


class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      videos: [],
      selectedVideo: null,
      loadedVideo: null,
      queue: []
    }
  }

  handlePlayBtn = (e) => {
    e.preventDefault();
    const loadedVideo = this.state.selectedVideo
    this.setState({ loadedVideo })
  }

  handleAddToQ = (e) => {
    e.preventDefault();
    const queue = [...this.state.queue, this.state.selectedVideo]
    this.setState({ queue })
  }

  handleSubmit = async (keywordFromSearch) => {
    const response = await youtubeAPI(keywordFromSearch);
    console.log(response);
    this.setState({
      videos: response.items
    })
  }

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
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
            <LandingPage
              handleLogout={this.handleLogout}
              user={this.state.user}
            />
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
          <Route exact path='/videoroom' render={() =>
            <VideoRoomPage
              handleFormSubmit={this.handleSubmit}
              handleVideoSelect={this.handleVideoSelect}
              videos={this.state.videos}
              selectedVideo={this.state.selectedVideo}
              handleAddToQ={this.handleAddToQ}
              handlePlayBtn={this.handlePlayBtn}
              loadedVideo={this.state.loadedVideo}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;


