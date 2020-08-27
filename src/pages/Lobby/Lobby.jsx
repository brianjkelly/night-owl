import React from 'react';
import './Lobby.css';
import roomService from '../../utils/roomService';
import NavBar from '../../components/NavBar/NavBar';
import NightOwlLogo from '../../components/NightOwlLogo/NightOwlLogo';

class Lobby extends React.Component {

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
                <button className="create-button" onClick={this.handleRoomCreate}>Create room</button>
            </div>
        );
    }
}

export default Lobby;