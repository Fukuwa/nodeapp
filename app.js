// Reference to express package
var express = require('express');
var app = express();

// System specified port
//var port = process.env.port;
var port = 5000;

// Route files locations
var eventRouter = require('./src/routes/eventRoutes');
var dbRouter = require('./src/routes/dbRoutes');

// Static folder locations
app.use(express.static('public'));
app.use(express.static('bower_components'));

// 'views' is used by EJS to find files with EJS code
app.set('views', 'src/views');
app.set('view engine', 'ejs');

// States that earlier defined the route is used
app.use('/Events', eventRouter);
app.use('/Db', dbRouter);

// Specifies request type
app.get('/', function(req, res){
    //res.send('App message');
    res.render('index', {
        list: ['1st val', '2nd val', '3rd val'],
        nav: [{ Link: '#Services', Text: 'Services' },
            { Link: '#Portfolio', Text: 'Portfolio' },
            { Link: '#About', Text: 'About' },
            { Link: '#Team', Text: 'Team' },
            { Link: '#Contact', Text: 'Contact' },
            { Link: 'Events', Text: 'Events' }]
    });
});

// Routing
app.get('/routing', function(req, res){
    res.send('Routing message');
});

// Express stats listening requests from given port

app.listen(port, function(err) {
   console.log('The server is running on port: ' + port);
});
