// Reference to express package
var express = require('express');
var app = express();

// System specified port
//var port = process.env.port;
var port = 5000;
var eventRouter = express.Router();

// Static folder locations
app.use(express.static('public'));
app.use(express.static('bower_components'));

// 'views' is used by EJS to find files with EJS code
app.set('views', 'src/views');
app.set('view engine', 'ejs');

// Event data to be tracked
var eventsData = [
    {
        name: 'Event 1',
        description: 'The first event',
        date: '2016.01.01',
        time: '1:00 午後',
        duration: '1 Hour',
        location: {
            streetAddr: '101 Main St.',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
        },
        capacity: 100
    },
    {
        name: 'Event 2',
        description: 'The second event',
        date: '2016.02.02',
        time: '2:00 午後',
        duration: '2 Hours',
        location: {
            streetAddr: '202 Main St.',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
        },
        capacity: 200
    },
    {
        name: 'Event 3',
        description: 'The third event',
        date: '2016.03.03',
        time: '3:00 午後',
        duration: '3 Hour',
        location: {
            streetAddr: '303 Main St.',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
        },
        capacity: 300
    },
    {
        name: 'Event 4',
        description: 'The fourth event',
        date: '2016.04.04',
        time: '4:00 午後',
        duration: '4 Hour',
        location: {
            streetAddr: '404 Main St.',
            city: 'Los Angeles',
            state: 'CA',
            zip: '87885',
            lon: 0,
            lat: 0
        },
        capacity: 400
    }

];

/**
 * Renders events page
 * Passes in list, nav and events
 */
eventRouter.route('/')
    .get(function(req, res){
        res.render('events', {
            list: ['1st Event', '2nd Event', '3rd Event'],
            nav: [{ Link: 'Services', Text: 'Services' },
                { Link: 'Portfolio', Text: 'Portfolio' },
                { Link: 'About', Text: 'About' },
                { Link: 'Team', Text: 'Team' },
                { Link: 'Contact', Text: 'Contact' },
                { Link: 'Events', Text: 'Events' }
            ],
            events: eventsData
        });
    });
    // States that the route is used
app.use('/Events', eventRouter);

// Specifies request type
app.get('/', function(req, res){
    //res.send('App message');
    res.render('index', {
        list: ['1st val', '2nd val', '3rd val'],
        nav: [{ Link: 'Services', Text: 'Services' },
            { Link: 'Portfolio', Text: 'Portfolio' },
            { Link: 'About', Text: 'About' },
            { Link: 'Team', Text: 'Team' },
            { Link: 'Contact', Text: 'Contact' },
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