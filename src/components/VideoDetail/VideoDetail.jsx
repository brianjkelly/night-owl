import React from 'react';

const VideoDetail = ({video}) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    console.log(typeof(video));
    return (
        <div>
            <div className="video-embedded">
                <iframe src={videoSrc} allowFullScreen title="Video Player"/>
            </div>
            <div className="video-segment">
                <h4 className="video-player-header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;