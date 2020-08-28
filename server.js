const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cors = require('cors')


// set up express
const app = express();
const port = process.env.PORT || '3001';

// user list set up

const users = {};

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
app.use('/api/videos', require('./routes/api/videos'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/rooms', require('./routes/api/rooms'));

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
io.sockets.on('connection', socket => {
    console.log('user connected');

    socket.on('register-user', name => {
        console.log(name);
        users[socket.id] = name;
        io.emit('update-user-list', Object.values(users));
    });

    socket.on('disconnect', () => {
        delete users[socket.id];
        io.emit('update-user-list', Object.values(users));
    });



    socket.on('join', ({ user, room }) => {
        socket.join(room);
        io.to(room).emit('chat message', `${user} has joined ${room}`);

        socket.on('add-queue', queue => {
            io.to(room).emit('unify-queue', queue);
        })

        socket.on('remove-queue', queue => {
            io.to(room).emit('unify-queue', queue);
        })

        socket.on('play-video', loadedVideo => {
            io.to(room).emit('unify-loadedVideo', loadedVideo);
        })

        socket.on('chat message', ({ user, msg }, cb) => {
            console.log(`${user} sent ${msg}`);
            io.to(room).emit('chat message', msg);
            cb();

        });

    });
    socket.on('disconnect', () => {
        console.log('user disconnected')
    });
});