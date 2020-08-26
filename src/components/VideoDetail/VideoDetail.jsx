import React from 'react';

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>No Video Selected</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}?autoplay=1`;
    
    return (
        <div>
            <div className="video-embedded">
                <iframe src={videoSrc} type="text/html" width="960" height="520" allowFullScreen title="Video Player" frameBorder="0" />
            </div>
            <div className="video-segment">
                <h4 className="video-player-header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;