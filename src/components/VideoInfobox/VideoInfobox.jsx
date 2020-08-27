import React from 'react';

const VideoInfobox = ({ loadedVideo }) => {
    return (
        <div className="video-segment">
            <div className="video-player-header">{loadedVideo.snippet.title}</div>
            <div>{loadedVideo.snippet.description}</div>
        </div>
    )
}

export default VideoInfobox;