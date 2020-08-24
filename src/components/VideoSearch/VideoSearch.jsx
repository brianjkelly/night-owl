import React, { Component } from 'react';

class VideoSearch extends Component {
    state = {
        keyword: 'Enter Keyword'
    }
    // create function for handling changes
    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }
    // create function for submitting keyword
    handleSubmit = e => {
        e.preventDefault();
        this.props.handleFormSubmit(this.state.keyword);
    }

    render() {
        return(
            <div className="VideoSearch">
                <div className="VideoSearch-header">
                    <h2>Video Search</h2>
                </div>
                <form className="VideoSearch-form" onSubmit={this.handleSubmit}>
                    <input 
                    type="text" 
                    name="video-search" 
                    value={this.state.keyword} 
                    onChange={this.handleChange} 
                    />
                    <button type="submit">Search</button>
                </form>
            </div>
        );
    }
}

export default VideoSearch;