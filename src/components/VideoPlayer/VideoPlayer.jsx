import React from 'react';

const VideoPlayer = ({ loadedVideo }) => {

    const videoSrc = `https://www.youtube.com/embed/${loadedVideo.id.videoId}?autoplay=1`;

    return (
        <div className="video-embedded">
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
    )
}

export default VideoPlayer;