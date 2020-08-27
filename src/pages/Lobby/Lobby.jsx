import React from 'react';
import './Lobby.css';
import roomService from '../../utils/roomService';
import NavBar from '../../components/NavBar/NavBar';
import NightOwlLogo from '../../components/NightOwlLogo/NightOwlLogo';

class Lobby extends React.Component {

    state = {
        keyword: 'Enter Room ID'
    }

    handleChange = (e) => {
        this.setState({
            keyword: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.history.push(`/videorooms/${this.state.keyword}`);
    }

    handleInputClick = (e) => {
        e.preventDefault();
        this.setState({ keyword: '' })
    }

    handleRoomCreate = async () => {
        const room = await roomService.createRoom(this.props.user);
        this.props.history.push(`/videorooms/${room.roomId}`);
    }

    render () {
        return (
            <div className="LobbyPage">
                <div> <NightOwlLogo /></div>
                <NavBar 
                user={this.props.user}
                handleLogout={this.props.handleLogout}
                />
               <form className="room-id-form" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="room-id"
                        value={this.state.keyword}
                        onChange={this.handleChange}
                        onClick={this.handleInputClick}
                    />
                    <button className="room-button" type="submit">Connect</button>
               </form>
               <br></br>
                <button className="create-button" onClick={this.handleRoomCreate}>Create Room</button>
            </div>
        );
    }
}

export default Lobby;