const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors')

// place routers here


// set up express
const app = express();

const port = 3001

// connect to DB with Mongoose
require('dotenv').config();
require('./config/database.js');


// configure serve-favicon and static middlewares to 'build' folder

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// place API routes here


// place "catch all" route here
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// configure to use port 3001 during dev
const server = app.listen(port, () => {
    console.log(`Express app running on port:${port}`);
});
// Establish socket.io connection
const io = require('socket.io').listen(server);
io.sockets.on('connection', (socket) => {
    console.log('user connected');
    socket.on('join', ({ user, room }, error) => {
        console.log(`${user} attempting to join ${room}`);
        socket.join(room);
        io.to(room).emit('chat message', `${user} has joined ${room}`);
        error();
        socket.on('chat message', (msg, cb) => {
            console.log(`${user} sent ${msg}`);
            io.to(room).emit('chat message', msg);
            cb();
        });
    });
    socket.on('disconnect', () => {
        console.log('user disconnected')
    });
});