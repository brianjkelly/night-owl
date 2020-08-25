import io from 'socket.io-client';

function socketConnect() {
    return io('localhost:3001', { reconnection: false });
}

export default {
    socketConnect
}