import React from 'react';

const VideoItem = ({ video , handleVideoSelect }) => {
    return (
        <div className="video-item" onClick={ () => handleVideoSelect(video) }>
            <img className="video-image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            <div className="video-content">
                <div className="video-header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;