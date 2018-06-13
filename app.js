// Reference to express package
var express = require('express');
var app = express();

// System specified port
//var port = process.env.port;
var port = 5000;

// Express stats listening requests from given port

app.listen(port, function(err) {
   console.log('The server is running on port: ' + port);
});