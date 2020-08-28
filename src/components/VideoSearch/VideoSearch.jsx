import React, { Component } from 'react';
import './VideoSearch.css';

class VideoSearch extends Component {
    state = {
        keyword: 'Enter Search Keyword'
    }
    // create function for handling changes
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }
    // create function for submitting keyword
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleFormSubmit(this.state.keyword);
    }

    handleInputClick = (e) => {
        e.preventDefault();
        this.setState({ keyword: '' })
    }

    render() {
        return(
            <div className="video-search">
                <div className="h-logo">INSERT LOGO HERE</div>
                <div className="room-hdr">Welcome to Room #{this.props.roomId}</div>
                <span className="search-title">Search Videos:</span>
                <form className="video-search-form" onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="video-search" 
                    value={this.state.keyword} 
                    onChange={this.handleChange} 
                    onClick={this.handleInputClick}
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default VideoSearch;