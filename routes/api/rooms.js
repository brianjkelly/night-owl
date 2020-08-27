const express = require('express');
const router = express.Router();
const roomsCtrl = require('../../controllers/rooms')


router.post('/', roomsCtrl.create);
router.post('/:id/queue-video', roomsCtrl.queueVideo);

module.exports = router;