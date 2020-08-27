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
            </div>
        )
    });

    return (
        <div>
            <div className="video-grid-header">
                <span className="title">Video Search Results</span>
                <div className="video-play-btn">
                    <PlayButton
                        selectedVideo={selectedVideo}
                        handlePlayBtn={handlePlayBtn}
                        loadedVideo={loadedVideo}
                    />
                </div>
                <div className="video-add-btn">
                    <QuButton
                        selectedVideo={selectedVideo}
                        handleAddToQ={handleAddToQ}
                    />
                </div>
            </div>
            <div className="VideoList">
                {renderedVideos}
            </div>
        </div>
    )

}

export default VideoList;