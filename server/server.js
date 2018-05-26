var path = require('path');
var express = require('express');
var io = require('socket.io');
var http = require('http');

var app = express();
var port = process.env.PORT || 3000;
var server = http.createServer(app);
var socketIO = io(server);

app.use(express.static(path.join(__dirname, '../public')));


socketIO.on('connection', function(clientSocket){

    clientSocket.emit('newMessage', {
        from:"indra@example.com",
        text:"new Message from indra@example.com",
        createdAt:"20180312T09:00:00Z"

    });

    clientSocket.on('createMessage',function(message){
        console.log(JSON.stringify(message));
    })

    clientSocket.on('disconnect', function(){
        console.log("disconnected from the client");
})
});



server.listen(port, ()=>{
    console.log("Server started on port: " + `${port}`);
})
