import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import QuButton from '../QuButton/QuButton';
import PlayButton from '../PlayButton/PlayButton';
import './VideoList.css';

const VideoList = ({ videos, handleVideoSelect, selectedVideo, handleAddToQ, handlePlayBtn, loadedVideo }) => {
    const renderedVideos = videos.map((video, idx) => {
        return (
            <div key={idx}>
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
            <div className="video-grid-header">
                <span className="title">Video Search Results</span>
                </div>
                <div className="VideoList">
                    {renderedVideos}
                </div>
        </div>
    )

}

export default VideoList;