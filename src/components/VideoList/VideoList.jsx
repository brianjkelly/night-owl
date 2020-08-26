import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import QuButton from '../QuButton/QuButton';

const VideoList = ({ videos , handleVideoSelect, selectedVideo, handleAddToQ }) => {
    const renderedVideos = videos.map((video) => {
        return (
            <div>
                <VideoItem 
                    key={video.id.videoId} 
                    video={video}
                    handleVideoSelect={handleVideoSelect}
                    selectedVideo={selectedVideo}
                />
                <QuButton
                    video={video}
                    selectedVideo={selectedVideo}
                    handleAddToQ={handleAddToQ}
                />
            </div>
        )
    });

    return <div className="VideoList">{renderedVideos}</div>;

}

export default VideoList;