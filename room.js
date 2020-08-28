class msgList {
    constructor() {

    }
}

class VideoRoom {
    roomId;
    leader;
    userList;
    videos;
    selectedVideo;
    loadedVideo;
    queue;
    msgHistory;

    constructor(name) {
        this.roomId = this.generateId();
        this.leader = name;
        this.userList = [];
        this.videos = [];
        this.selectedVideo = null;
        this.loadedVideo = null;
        this.queue = [];
        this.msgHistory = [];
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