const VideoRoom = require('../room').VideoRoom;

module.exports = {
    create
}

function create(req, res) {
    console.log("TEST");
    console.log(req.body);
    try {
        const roomRes = new VideoRoom(req.body.name);
        res.json(roomRes);
    } catch (err) {
        res.status(400).json(err);
    }
}