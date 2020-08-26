import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';

const VideoDetail = ({ loadedVideo }) => { 

    if (!loadedVideo) {
        return <div>No Video Loaded</div>;
    }

    return (
        <div>
            <VideoPlayer 
                loadedVideo = {loadedVideo}
            />
            <div className="video-segment">
                <h4 className="video-player-header">{loadedVideo.snippet.title}</h4>
                <p>{loadedVideo.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;