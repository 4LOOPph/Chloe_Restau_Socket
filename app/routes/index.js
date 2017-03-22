'use strict';
var clients = [];

module.exports = function(app, io, config) {
    var currentUser;
    var socketId;

    app.route('/').get(function(req, res) {
        res.send('Hello World');
    });

    io.on('connection', function(socket) {
        console.log('socket: ',socket.id);
        socketId = socket.id;
        
        socket.on('connect', function(socket) {
            console.log('connected to server: ',socket);
        });

        socket.on('register:device', function(data) {
            socket.join(data);
        });

        socket.on('ReceiveData:sendingTo:Order', function(data){
            io.sockets.in(data.roomname).emit("sendTo:OrderApp", data);
        });

        socket.on('ReceiveData:sendingTo:ChloePOS', function(data) { // SENDING DATA FROM ORDERING TO CHLOE POS
            io.sockets.in(data.roomname).emit('sendto:ChloePOS', data);
        });

        socket.on('ReceiveData:sendingTo:Kitchen', function(data) { // SENDING DATA FROM CHLOEPOS TO KITCHEN
            data = JSON.parse(data);
            data.orders = JSON.parse(data.orders);
            io.sockets.in(data.roomname).emit('sendto:Kitchen', data);
        });

        socket.on('ReceiveData:sendingTo:Que', function(data) { // SENDING DATA FROM KITCHEN TO QUE
            console.log('data: ',data);
            io.sockets.in(data.roomname).emit('sendto:Que', data);
        });

        socket.on('disconnect', function() {
            console.log('socketId disconnect to server', socketId);
        });
    });
};
