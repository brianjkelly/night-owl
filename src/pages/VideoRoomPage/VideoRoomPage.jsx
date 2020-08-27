import React from 'react';
import VideoSearch from '../../components/VideoSearch/VideoSearch';
import VideoList from '../../components/VideoList/VideoList';
import VideoQuList from '../../components/VideoQuList/VideoQuList';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import ChatBox from '../../components/ChatBox/ChatBox';

const VideoRoomPage = (props) => {
    return (
        <div className="VideoRoomPage">
            <VideoSearch
                handleFormSubmit={props.handleFormSubmit}
            />
            <div className="video-display">
                <div className="video-grid-container">
                    <VideoList
                        handleVideoSelect={props.handleVideoSelect}
                        videos={props.videos}
                        selectedVideo={props.selectedVideo}
                        handleAddToQ={props.handleAddToQ}
                        handlePlayBtn={props.handlePlayBtn}
                        loadedVideo={props.loadedVideo}
                    />
                    <VideoQuList 
                        queue={props.queue}
                        handleQuVideoSelect={props.handleQuVideoSelect}
                        quSelectedVideo={props.quSelectedVideo}
                        handleRemoveFromQ={props.handleRemoveFromQ}
                        handleQuPlayBtn={props.handleQuPlayBtn}
                    />
                </div>
            </div>
            <VideoDetail
                loadedVideo={props.loadedVideo}
            />
            <ChatBox />
        </div>
    )
}

export default VideoRoomPage;