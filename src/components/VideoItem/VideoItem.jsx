import React from 'react';

const VideoItem = ({ video , handleVideoSelect, selectedVideo }) => {

    return (
        <div className="video-item" onClick={ () => handleVideoSelect(video) }>
            <img className="video-image-container" src={video.snippet.thumbnails.default.url} alt={video.snippet.description} />
            <div className="video-content">
                <div className="video-header">{video.snippet.title}</div>
            </div>
        </div>
    );
}

export default VideoItem;