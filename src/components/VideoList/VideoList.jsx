import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos , handleVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
        return (
            <VideoItem 
                key={video.id.videoId} 
                video={video}
                handleVideoSelect={handleVideoSelect}
            />
        )
    });

    return <div className="VideoList">{renderedVideos}</div>;

}

export default VideoList;