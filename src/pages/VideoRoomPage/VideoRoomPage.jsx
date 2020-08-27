import React from 'react';
import VideoSearch from '../../components/VideoSearch/VideoSearch';
import VideoList from '../../components/VideoList/VideoList';
import VideoQuList from '../../components/VideoQuList/VideoQuList';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import youtubeAPI from '../../utils/youtube-api';
import ChatBox from '../../components/ChatBox/ChatBox';
import roomService from '../../utils/roomService';
import './VideoRoomPage.css';

class VideoRoomPage extends React.Component {
    constructor() {
        super();
        this.state = {
            roomId: null,
            leader: null,
            userList: null,
            videos: [],
            selectedVideo: null,
            loadedVideo: null,
            queue: [],
            msgHistory: []
        }
    }

    handleRemoveFromQ = async (e) => {
        e.preventDefault();

        let payload = {};
        payload.idx = e.target[0].value;
        payload.video = this.state.quSelectedVideo;

        const response = await roomService.deleteQueueVideo(this.state.roomId, payload);
        const queue = [...response.queue];

        this.setState({ queue })
        this.setState({ quSelectedVideo: null });
    }

    handlePlayBtn = async (e) => {
        e.preventDefault();

        const response = await roomService.updateLoadedVideo(this.state.roomId, this.state.selectedVideo);
        const loadedVideo = response.loadedVideo;
        this.setState({ loadedVideo })
    }

    handleAddToQ = async (e) => {
        e.preventDefault();

        const response = await roomService.queueVideo(this.state.roomId, this.state.selectedVideo);
        const queue = [...response.queue];

        this.setState({ queue });
    }

    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    handleFormSubmit = async (keywordFromSearch) => {
        const response = await youtubeAPI(keywordFromSearch);
        this.setState({
            videos: response.items
        });
    }

    componentDidMount() {
        this.setState({ roomId: this.props.match.params.id });
    }

    render() {
        return (
            <div className="VideoRoomPage">
                {!this.state.roomId ?
                    (<div>Initalizing page</div>)
                    : (
                        <div>
                            <VideoSearch
                                handleFormSubmit={this.handleFormSubmit}
                            />
                            <div className="video-display">
                                <div className="video-grid-container">
                                    <VideoList
                                        handleVideoSelect={this.handleVideoSelect}
                                        videos={this.state.videos}
                                        selectedVideo={this.state.selectedVideo}
                                        handleAddToQ={this.handleAddToQ}
                                        handlePlayBtn={this.handlePlayBtn}
                                        loadedVideo={this.state.loadedVideo}
                                    />
                                    <VideoQuList
                                        queue={this.state.queue}
                                        handleVideoSelect={this.handleVideoSelect}
                                        selectedVideo={this.state.selectedVideo}
                                        handleRemoveFromQ={this.handleRemoveFromQ}
                                    />
                                </div>
                            </div>
                            <div className="watch-grid">
                                <div className="video-all">
                                    <VideoDetail
                                        className="video-all"
                                        loadedVideo={this.state.loadedVideo}
                                        user={this.props.user.name}
                                        roomId={this.state.roomId}
                                    />
                                </div>
                                <div className="video-chatbox">
                                    <ChatBox
                                        className="video-chatbox"
                                        user={this.props.user.name}
                                        roomId={this.state.roomId}
                                    />
                                </div>
                            </div>
                        </div>
                    )}
            </div>
        );
    }
}

export default VideoRoomPage;