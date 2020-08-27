import React from 'react';
import './VideoInfobox.css'

const VideoInfobox = ({ loadedVideo }) => {
    return (
        <div className="video-infobox">
            <div className="video-info-desc">
                <div className="channel-name">{loadedVideo.snippet.channelTitle}</div>
                <div className="video-pub-date">{loadedVideo.snippet.publishedAt}</div>
            </div>
            <div className="video-description">{loadedVideo.snippet.description}</div>
        </div>
    )
}

export default VideoInfobox;