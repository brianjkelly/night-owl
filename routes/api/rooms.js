const express = require('express');
const router = express.Router();
const roomsCtrl = require('../../controllers/rooms')

router.get('/:id', roomsCtrl.populate);

router.post('/', roomsCtrl.create);
router.post('/:id/queue-video', roomsCtrl.queueVideo);
router.delete('/:id/delete', roomsCtrl.deleteFromQueue);
router.patch('/:id/', roomsCtrl.updateLoadedVideo);


module.exports = router;