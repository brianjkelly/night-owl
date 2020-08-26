import React from 'react';
import QuItem from '../QuItem/QuItem';
import RemoveButton from '../RemoveButton/RemoveButton';
import QuPlayButton from '../QuPlayButton/QuPlayButton';

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
            <h2>Queue List</h2>
            <div className="QueueList">{queuedVideos}</div>
        </div>
    )
}

export default VideoQuList;