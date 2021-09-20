var express = require ('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = 5000;

app.get('/',function(req,res) {
    res.sendFile(__dirname + '/index.html');
});

http.listen(port,function() {
    console.log('listening on:' + port);
});

io.sockets.on('connection',function(socket){
    console.log('A new client connected');

    socket.on('sendmsg',function(data){
        console.log('server: ' + data);
        socket.broadcast.emit('updateHeader',data);
    });
});