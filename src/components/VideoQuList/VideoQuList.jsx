import React from 'react';
import QuItem from '../QuItem/QuItem';
import RemoveButton from '../RemoveButton/RemoveButton';
import QuPlayButton from '../QuPlayButton/QuPlayButton';
import './VideoQuList.css';

const VideoQuList = ({ queue, handleQuVideoSelect, quSelectedVideo, handleRemoveFromQ, handleQuPlayBtn }) => {
    const queuedVideos = queue.map((qVideo, idx) => {
        return (
            <div key={'video-' + idx}>
                <QuItem
                    key={qVideo.id.videoId}
                    qVideo={qVideo}
                    handleQuVideoSelect={handleQuVideoSelect}
                />    
            </div>
        )
    });

    return (
        <div>
            <div className="q-video-grid-header">
                <span className="q-title">Video Playlist Queue</span>
                <div className="q-video-play-btn">
                    <QuPlayButton
                        quSelectedVideo={quSelectedVideo}
                        handleQuPlayBtn={handleQuPlayBtn}
                    />
                </div>
                <div className="q-rmv-btn">
                    <RemoveButton
                        quSelectedVideo={quSelectedVideo}
                        handleRemoveFromQ={handleRemoveFromQ}
                    />
                </div>
            </div>
            <div className="QueueList">{queuedVideos}</div>
        </div>
    )
}

export default VideoQuList;