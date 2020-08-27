import React from 'react';
import VideoSearch from '../../components/VideoSearch/VideoSearch';
import VideoList from '../../components/VideoList/VideoList';
import VideoQuList from '../../components/VideoQuList/VideoQuList';
import VideoDetail from '../../components/VideoDetail/VideoDetail';
import ChatBox from '../../components/ChatBox/ChatBox';
import youtubeAPI from '../../utils/youtube-api';

class VideoRoomPage extends React.Component {
    constructor() {
        super();
        this.state = {
            roomId: null,
            videos: [],
            selectedVideo: null,
            loadedVideo: null,
            queue: [],
            quSelectedVideo: null
        }
    }

    handleQuPlayBtn = (e) => {
        e.preventDefault();
        const loadedVideo = this.state.quSelectedVideo
        this.setState({ loadedVideo })
    }

    handleRemoveFromQ = (e) => {
        e.preventDefault();
        const queue = [...this.state.queue];
        for (var i = queue.length - 1; i >= 0; --i) {
            if (queue[i] === this.state.quSelectedVideo) {
                queue.splice(i, 1);
            }
        }
        this.setState({ queue })
        this.setState({ quSelectedVideo: null })
    }

    handleQuVideoSelect = (qVideo) => {
        this.setState({ quSelectedVideo: qVideo });
    }

    handlePlayBtn = (e) => {
        e.preventDefault();
        const loadedVideo = this.state.selectedVideo
        this.setState({ loadedVideo })
    }

    handleAddToQ = (e) => {
        e.preventDefault();
        const queue = [...this.state.queue, this.state.selectedVideo]
        this.setState({ queue })
    }

    handleFormSubmit = async (keywordFromSearch) => {
        const response = await youtubeAPI(keywordFromSearch);
        this.setState({
            videos: response.items
        });
    }

    handleVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    componentDidMount() {
        this.setState({ roomId: this.props.match.params.id });
    }

    render() {
        const { isFetching } = this.state;
        return (
            <div className="VideoRoomPage">
                {isFetching ?
                    (<div>Initalizing chat</div>)
                    : (
                        <div>
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
            <ChatBox
                user={this.props.user.name}
                roomId={this.state.roomId} 
             />
                        </div>
                    )}
            </div>
        );
    }
}

export default VideoRoomPage;