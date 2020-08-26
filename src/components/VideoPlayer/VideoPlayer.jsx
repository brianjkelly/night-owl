import React from 'react';
import './VideoPlayer.css';

const VideoPlayer = ({ loadedVideo }) => {

    const videoSrc = `https://www.youtube.com/embed/${loadedVideo.id.videoId}?autoplay=1`;

    return (
        <div className="video-container">
            <div className="video-e">
                <iframe 
                    className="video-player"
                    src={videoSrc} 
                    type="text/html" 
                    width="960" 
                    height="520" 
                    allow="autoplay; encrypted-media"
                    allowFullScreen 
                    title="Video Player" 
                    frameBorder="0" />
            </div>
        </div>
    );
}

export default VideoPlayer;