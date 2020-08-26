import React from 'react';
import VideoSearch from '../../components/VideoSearch/VideoSearch';
import VideoList from '../../components/VideoList/VideoList';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import ChatBox from '../../components/ChatBox/ChatBox';

const VideoRoomPage = (props) => {
    return (
        <div className="VideoRoomPage">
            <VideoDetail
                loadedVideo={props.loadedVideo}
            />
            <VideoSearch
                handleFormSubmit={props.handleFormSubmit}
            />
            <VideoList
                handleVideoSelect={props.handleVideoSelect}
                videos={props.videos}
                selectedVideo={props.selectedVideo}
                handleAddToQ={props.handleAddToQ}
                handlePlayBtn={props.handlePlayBtn}
                loadedVideo={props.loadedVideo}
            />
            <ChatBox />
        </div>
    )
}

export default VideoRoomPage;