var path = require('path');
var express = require('express');

var app = express();

app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile('index.html');
})


app.listen(3000, ()=>{
    console.log("Server started on port 3000");
})
