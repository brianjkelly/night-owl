const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

const app = express();

// connect to DB with Mongoose
require('dotenv').config();
require('./config/database.js');

app.use(logger('dev'));
app.use(express.json());

// configure serve-favicon and static middlewares to 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// place API routes here

// place "catch all" route here
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// configure to use port 3001 during dev
const port = process.env.PORT || 3001;

app.listen(port, function() {
    console.log(`Express app running on port ${port}`)
});