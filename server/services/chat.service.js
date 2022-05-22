// Import Message model
const Message = require('../models/Message');

module.exports = (io, socket) => {

    let _username = '';

    const disconnect = () => {

        let notifyMsg = new Message('server', 'server', `${_username} left the chat room`);
        socket.broadcast.emit('message', notifyMsg);
    }
  
    const broadcastMessage = (msg) => {
        console.log(msg);
        socket.broadcast.emit('message', msg);
    }

    const broadcastChatMessage = (msg) => {
        console.log(msg);
        socket.broadcast.emit('chat-message', msg);
    }

    const connect = (username) => {

        _username = username;
        console.log(_username + " connected");

        let notifyMsg = new Message('server', 'server', `${_username} joined the chat room`);
        socket.broadcast.emit('message', notifyMsg);

    }

    socket.on('user-joined', connect);
  
    socket.on('message', broadcastMessage);

    socket.on('chat-message', broadcastChatMessage);
    
    socket.on('disconnect', disconnect);

  }