import React from 'react';
import VideoSearch from '../../components/VideoSearch/VideoSearch';

const VideoRoomPage = (props) => {
    return (
        <div className="VideoRoomPage">
            <VideoSearch 
                handleFormSubmit={props.handleFormSubmit}
            />
        </div>
    )
}

export default VideoRoomPage;