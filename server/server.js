var path = require('path');
var express = require('express');

var app = express();
var port = process.env.port || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.listen(3000, ()=>{
    console.log("Server started on port: " + `${port}`);
})
