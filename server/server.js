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
    console.log("Connected to the client..." + clientSocket);
    clientSocket.on('disconnect', function(){
    console.log("disconnected from the client");
})
});



server.listen(port, ()=>{
    console.log("Server started on port: " + `${port}`);
})
