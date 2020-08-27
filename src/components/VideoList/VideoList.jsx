import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import QuButton from '../QuButton/QuButton';
import PlayButton from '../PlayButton/PlayButton';

const VideoList = ({ videos, handleVideoSelect, selectedVideo, handleAddToQ, handlePlayBtn, loadedVideo }) => {
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
                    handlePlayBtn={handlePlayBtn}
                    loadedVideo={loadedVideo}
                />
                <QuButton
                    video={video}
                    selectedVideo={selectedVideo}
                    handleAddToQ={handleAddToQ}
                />
            </div>
        )
    });

    return (
        <div>
            <h2>Video List</h2>
            <div className="VideoList">{renderedVideos}</div>
        </div>
    )

}

export default VideoList;