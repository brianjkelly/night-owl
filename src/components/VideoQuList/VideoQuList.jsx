import React from 'react';
import QuItem from '../QuItem/QuItem';

const VideoQuList = ({ queue, handleQuVideoSelect }) => {
    const queuedVideos = queue.map((qVideo) => {
        return(
            <div>
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
            <h2>Queue List</h2>
            <div className="QueueList">{queuedVideos}</div>
        </div>
    )
}

export default VideoQuList;