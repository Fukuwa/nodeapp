// Reference to express package
var express = require('express');
var app = express();

// System specified port
//var port = process.env.port;
var port = 5000;

// Static folder locations
app.use(express.static('public'));
app.use(express.static('src/views'));
app.use(express.static('bower_components'));

// Specifies request type
app.get('/', function(req, res){
    res.send('App message');
});

// Routing
app.get('/routing', function(req, res){
    res.send('Routing message');
});

// Express stats listening requests from given port

app.listen(port, function(err) {
   console.log('The server is running on port: ' + port);
});