import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import LandingPage from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import VideoRoomPage from '../VideoRoomPage/VideoRoomPage'
import youtube from '../../utils/youtube-api';
import userService from '../../utils/userService'

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: userService.getUser(),
      videos: [],
      selectedVideo: null
    }
  }

  handleSubmit = async (keywordFromSearch) => {
    const response = await youtube.get('/search', {
      params: {
        q: keywordFromSearch
      }
    });
    this.setState({
      videos: response.data.items
    });
  }

  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
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
            <VideoRoomPage 
              handleFormSubmit={this.handleSubmit}
            />
          } />
        </Switch>
      </div>
    );
  }
}

export default App;
