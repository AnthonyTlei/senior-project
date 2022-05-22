const io = require('socket.io');

// Socket.io
io.on('connection', (socket) => {

    console.log('a user connected');

    socket.on('message', (msg) => {
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});