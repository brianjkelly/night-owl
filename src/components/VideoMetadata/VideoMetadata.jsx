import React from 'react';
import './VideoMetadata.css';

const VideoMetadata = (props) => {

    return (
        <div className="video-metadata">
            <h3>{props.loadedVideo.snippet.title}</h3>
        </div>
    );
}

export default VideoMetadata;