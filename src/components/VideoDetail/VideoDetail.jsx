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
                <div className="video-player-header">{loadedVideo.snippet.title}</div>
                <div>{loadedVideo.snippet.description}</div>
            </div>
        </div>

    )
}

export default VideoDetail;