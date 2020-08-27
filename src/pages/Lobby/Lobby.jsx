import React from 'react';
import roomService from '../../utils/roomService';

class Lobby extends React.Component {

    handleRoomCreate = async () => {
        const room = await roomService.createRoom(this.props.user);
        this.props.history.push(`/videorooms/${room.roomId}`);
    }

    render() {
        return (
            <div>
                <div>Lobby Page</div>
                <button onClick={this.handleRoomCreate}>Create room</button>
            </div>
        );
    }
}

export default Lobby;