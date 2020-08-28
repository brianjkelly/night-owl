import React from 'react';
import VideoItem from '../VideoItem/VideoItem';
import RemoveButton from '../RemoveButton/RemoveButton';
import './VideoQuList.css';

const VideoQuList = ({ queue, selectedVideo, handleVideoSelect, handleRemoveFromQ }) => {
    const queuedVideos = queue.map((qVideo, idx) => {
        return (
            <div key={'video-' + idx}>
                <VideoItem
                    key={qVideo.id.videoId}
                    video={qVideo}
                    handleVideoSelect={handleVideoSelect}
                    selectedVideo={selectedVideo}
                />
            </div>
        )
    });

    return (
        <div>
            <div className="q-video-grid-header">
                <span className="q-title">Video Playlist Queue</span>
            </div>
            <div className="QueueList">
                {queuedVideos}
            </div>
        </div>
    )
}

export default VideoQuList;