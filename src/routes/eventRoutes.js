// Reference to express package
var express = require('express');

var eventRouter = express.Router();

// Event data to be tracked
var eventsData = [
    {
        name: 'Event 1',
        description: 'The first event',
        date: '2016.01.01',
        time: '1:00 午後',
        duration: '1 Hour',
        img: '1.jpg',
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
        img: '2.jpg',
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
        img: '3.jpg',
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
        img: '4.jpg',
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

// Single event route
eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        res.render('event', {
            list: ['1st Event', '2nd Event', '3rd Event'],
            nav: [{ Link: 'Services', Text: 'Services' },
                { Link: 'Portfolio', Text: 'Portfolio' },
                { Link: 'About', Text: 'About' },
                { Link: 'Team', Text: 'Team' },
                { Link: 'Contact', Text: 'Contact' },
                { Link: 'Events', Text: 'Events' }
            ],
            // One item from the array
            events: eventsData[id]
        });
    });

// Exports data
module.exports = eventRouter;