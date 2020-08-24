import React from 'react';
import VideoSearch from '../../components/VideoSearch/VideoSearch';
import VideoList from '../../components/VideoList/VideoList';

const VideoRoomPage = (props) => {
    return (
        <div className="VideoRoomPage">
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