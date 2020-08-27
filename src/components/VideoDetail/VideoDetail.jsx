import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer';
import VideoInfobox from '../VideoInfobox/VideoInfobox';

const VideoDetail = ({ loadedVideo }) => { 

    if (!loadedVideo) {
        return <div>No Video Loaded</div>;
    }

    return (
        <div>
            <VideoPlayer 
                loadedVideo = {loadedVideo}
            />
            <VideoInfobox 
                loadedVideo = {loadedVideo}
            />
        </div>
    )
}

export default VideoDetail;