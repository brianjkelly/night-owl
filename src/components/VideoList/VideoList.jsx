import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import QuButton from '../QuButton/QuButton';
import PlayButton from '../PlayButton/PlayButton';

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
                <PlayButton 
                    video={video}
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