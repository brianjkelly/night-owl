const VideoRoom = require('../room').VideoRoom;

module.exports = {
    create,
    queueVideo,
    deleteFromQueue,
}

const videoRooms = [];

function create(req, res) {
    try {
        const roomRes = new VideoRoom(req.body.name);
        videoRooms.push(roomRes);
        res.json(roomRes);
    } catch (err) {
        res.status(400).json('Something went wrong.');
    }
}

function queueVideo(req, res) {
    try {
        const room = videoRooms.find(({ roomId }) => roomId === req.params.id);
        room.queue.push(req.body);
        console.log(room.queue);
        res.json(room);
    } catch (err) {
        res.status(400).json('Something went wrong.');
    }
}

function deleteFromQueue(req, res) {
    try {
        console.log('Deleting queue video');
        const room = videoRooms.find(({ roomId }) => roomId === req.params.id);
        console.log("========");
        console.log(req.body);
        res.json(room)
    } catch (err) {
        res.status(400).json('Something went wrong.');
    }
}