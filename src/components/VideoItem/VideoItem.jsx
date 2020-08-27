import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <div className="video-item" onClick={() => handleVideoSelect(video)}>
            <div className="video-image-container">
                <img className="video-image" src={video.snippet.thumbnails.default.url} alt={video.snippet.description} />
                <div className="time-label">
                    <span>05:22</span>
                </div>
            </div>
            <div className="video-info">
                <div className="semi-bold show-max-two-lines">{video.snippet.title}</div>
                <div className="video-preview-container">
                    <div className="channel-title">{video.snippet.channelTitle}</div>
                    <div><span>2.1M views • 2 days ago</span></div>
                </div>
            </div>
        </div>
    );
}

export default VideoItem;