const express = require('express');
const router = express.Router();
const videoCtrl = require('../../controllers/videos');

router.get('/search', videoCtrl.search);


module.exports = router;
