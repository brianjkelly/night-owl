import React from 'react';
import VideoItem from '../VideoItem/VideoItem';

const VideoList = ({ videos , handleVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
        return (
            <VideoItem 
                key={video.etag} 
                video={video}
                handleVideoSelect={handleVideoSelect}
            />
        )
    });

    return <div className="VideoList">{renderedVideos}</div>;

}

export default VideoList;