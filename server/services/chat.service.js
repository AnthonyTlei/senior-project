
module.exports = (io, socket) => {

    const disconnect = () => {
        console.log('User Disconnected...');
    }
  
    const broadcastMessage = (msg) => {
        console.log(msg);
        socket.broadcast.emit('message-broadcast', msg);
    }
  
    socket.on('message', broadcastMessage);
    
    socket.on('disconnect', disconnect);

  }