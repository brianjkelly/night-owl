import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
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
            </div>
        )
    });

    return (
        <div>
            <div className="video-grid-header">
                <span className="vs-title">Video Search Results</span>
            </div>
            <div className="VideoList">
                {renderedVideos}
            </div>
        </div>
    )

}

export default VideoList;