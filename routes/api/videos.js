const express = require('express');
const router = express.Router();
const request = require('request');
const { google } = require('googleapis');
const videoCtrl = require('../../controllers/videos');


router.get('/search', videoCtrl.search);


module.exports = router;
