import React from 'react';
import QuItem from '../QuItem/QuItem';
import RemoveButton from '../RemoveButton/RemoveButton';

const VideoQuList = ({ queue, handleQuVideoSelect, quSelectedVideo, handleRemoveFromQ }) => {
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