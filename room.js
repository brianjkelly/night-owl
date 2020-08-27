class msgList {
    constructor() {

    }
}

class VideoRoom {
    roomId;
    leader;
    userList;
    videoQueue;
    msgHistory;
    constructor(name) {
        this.roomId = this.generateId();
        this.leader = name;

    }

    generateId() {
        let id = '';
        const chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm1234567890';
        for (let i = 0; i < 8; i++) {
            id += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return id;
    }
}

module.exports = {
    VideoRoom
}