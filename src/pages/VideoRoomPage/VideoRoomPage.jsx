import React from 'react';
import io from 'socket.io-client';

import VideoSearch from '../../components/VideoSearch/VideoSearch';
import VideoList from '../../components/VideoList/VideoList';
import VideoQuList from '../../components/VideoQuList/VideoQuList';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import youtubeAPI from '../../utils/youtube-api';
import ChatBox from '../../components/ChatBox/ChatBox';
import roomService from '../../utils/roomService';
import ButtonDisplay from '../../components/ButtonDisplay/ButtonDisplay';

import './VideoRoomPage.css';
import { Redirect } from 'react-router-dom';


class VideoRoomPage extends React.Component {
    constructor() {
        super();
        this.state = {
            socket: null,
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

    handleFormSubmit = async (keywordFromSearch) => {
        const response = await youtubeAPI(keywordFromSearch);
        this.setState({
            videos: response.items
        });
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
        if (this.state.selectedVideo === null) {
            return;
        }
        const response = await roomService.updateLoadedVideo(this.state.roomId, this.state.selectedVideo);
        const loadedVideo = response.loadedVideo;
        this.state.socket.emit('play-video', loadedVideo);
        this.setState({ loadedVideo });
    }

    handleAddToQ = async (e) => {
        e.preventDefault();
        if (this.state.selectedVideo === null) {
            return;
        }
        const response = await roomService.queueVideo(this.state.roomId, this.state.selectedVideo);
        const queue = [...response.queue];
        this.state.socket.emit('add-queue', queue);
        this.setState({ queue });
    }

    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    async componentDidMount() {
        const socket = io('localhost:3001');
        socket.emit('join', { user: this.props.user.name, room: this.props.match.params.id }, error => {
            console.log(error);
        });

        socket.on('unify-queue', queue => {
            this.setState({ queue });
        })

        socket.on('unify-loadedVideo', loadedVideo => {
            this.setState({ loadedVideo });
        })
        this.setState({ socket });

        try {
            const roomFetch = await roomService.populate(this.props.match.params.id);
            console.log(roomFetch);
            this.setState({ roomId: this.props.match.params.id });
            this.setState({ ...roomFetch });
            console.log(this.state);
        } catch (err) {
            this.props.history.push('/lobby');
        }
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
                                <div className="btn-display">
                                    <ButtonDisplay
                                        handleAddToQ={this.handleAddToQ}
                                        handlePlayBtn={this.handlePlayBtn}
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
                                        socket={this.state.socket}
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