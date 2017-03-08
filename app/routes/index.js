'use strict';
var clients = [];

module.exports = function(app, io, config) {
    var currentUser;
    app.route('/').get(function(req, res) {
        res.send('Hello World');
    });

    io.on('connection', function(socket) {

        socket.on('register:device', function(data){
            socket.join(data);
        });

        socket.on('ReceiveData:sendingTo:ChloePOS', function(data){ // SENDING DATA FROM ORDERING TO CHLOE POS
            io.sockets.in(data.roomname).emit('sendto:ChloePOS', data);
        });

        socket.on('ReceiveData:sendingTo:Kitchen', function(data){  // SENDING DATA FROM CHLOEPOS TO KITCHEN
            io.sockets.in(data.roomname).emit('sendto:Kitchen', data);
        });

        socket.on('ReceiveData:sendingTo:Que', function(data){  // SENDING DATA FROM KITCHEN TO QUE
            io.socket.in(data.roomname).emit('sendto:Que', data);
        });

        socket.on('disconnect', function() {
            console.log('socketId disconnect to server', socketId);
        });
    });
};
