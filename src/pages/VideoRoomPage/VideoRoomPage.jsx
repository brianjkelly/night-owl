import React from 'react';
import VideoSearch from '../../components/VideoSearch/VideoSearch';
import VideoList from '../../components/VideoList/VideoList';
import VideoDetail from '../../components/VideoDetail/VideoDetail';

const VideoRoomPage = (props) => {
    return (
        <div className="VideoRoomPage">
             <VideoDetail 
                video={props.video}
            />
            <VideoSearch 
                handleFormSubmit={props.handleFormSubmit}
            />
            <VideoList 
                handleVideoSelect={props.handleVideoSelect}
                videos={props.videos}
            />           
        </div>
    )
}

export default VideoRoomPage;