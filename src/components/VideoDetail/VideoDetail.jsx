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
                className = "video-player" 
                loadedVideo = {loadedVideo}
            />
            <div className="video-metadata" style={{width: '100%', height: '100px', background: '#F91112'}}>Metadata</div>
            <VideoInfobox 
                className = "video-infobox"
                loadedVideo = {loadedVideo}
                style={{width: '100%', height: '100px', background: '#BD10E0'}}
            />
            <div className="video-chatbox">Video Chatbox</div>
        </div>
    );
}

export default VideoDetail;