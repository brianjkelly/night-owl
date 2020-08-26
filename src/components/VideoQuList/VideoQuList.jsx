import React from 'react';
import QuItem from '../QuItem/QuItem';
import RemoveButton from '../RemoveButton/RemoveButton';
import QuPlayButton from '../QuPlayButton/QuPlayButton';
import './VideoQuList.css';

const VideoQuList = ({ queue, handleQuVideoSelect, quSelectedVideo, handleRemoveFromQ, handleQuPlayBtn }) => {
    const queuedVideos = queue.map((qVideo) => {
        return(
            <div>
               <QuItem 
                key={qVideo.id.videoId}
                qVideo={qVideo}
                handleQuVideoSelect={handleQuVideoSelect}
               /> 
               <RemoveButton 
               qVideo={qVideo}
               quSelectedVideo={quSelectedVideo}
               handleRemoveFromQ={handleRemoveFromQ}
               />
               <QuPlayButton 
               qVideo={qVideo}
               quSelectedVideo={quSelectedVideo}
               handleQuPlayBtn={handleQuPlayBtn}
               />
            </div>
        )
    });

    return (
        <div>
            <div className="q-list-container">
                <h2>Queue List</h2>
            </div>
            <div className="QueueList">{queuedVideos}</div>
        </div>
        
    )
}

export default VideoQuList;