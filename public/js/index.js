var socket = io();
        socket.on('connect', function(){
            console.log("connected to the server");

            socket.emit('createMessage', {
                from:"Client@example.com",
                text:"Email from the client"

            });
        });

        socket.on('newMessage', function(message){
            console.log(JSON.stringify(message));
        });


        socket.on('disconnect', function(){
            console.log("disconnected from the server");
        })