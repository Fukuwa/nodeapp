// Reference to express package
var express = require('express');
var mongodb = require('mongodb').MongoClient;

var eventRouter = express.Router();

/**
 * Renders events page
 * Passes in list, nav and events
 * Connects to MongoDB database
 */
eventRouter.route('/')
    .get(function(req, res){
        // Opens a connection to a database via URL
        var url = 'mongodb://localhost:27017';
        // Mongodb holds collection
        mongodb.connect(url, function(err, client){
            var db = client.db('eventsApp');
            // Sends results back to page, so operation result is can be seen
            db.collection('events').find({}).toArray(function(err, results){
                res.render('events', {
                    list: ['1st Event', '2nd Event', '3rd Event'],
                    nav: [{ Link: 'Services', Text: 'Services' },
                        { Link: 'Portfolio', Text: 'Portfolio' },
                        { Link: 'About', Text: 'About' },
                        { Link: 'Team', Text: 'Team' },
                        { Link: 'Contact', Text: 'Contact' },
                        { Link: 'Events', Text: 'Events' }
                    ],
                    events: results
                });
            });
        });
    });

// Single event route
eventRouter.route('/:id')
    .get(function(req, res){
        var id = req.params.id;
        // Opens a connection to a database via URL
        var url = 'mongodb://localhost:27017';
        // Mongodb holds collection
        mongodb.connect(url, function(err, client){
            var db = client.db('eventsApp');
            // Sends results back to page, so operation result is can be seen
            db.collection('events').find({}).toArray(function(err, results){
                res.render('event', {
                    list: ['1st Event', '2nd Event', '3rd Event'],
                    nav: [{ Link: 'Services', Text: 'Services' },
                        { Link: 'Portfolio', Text: 'Portfolio' },
                        { Link: 'About', Text: 'About' },
                        { Link: 'Team', Text: 'Team' },
                        { Link: 'Contact', Text: 'Contact' },
                        { Link: 'Events', Text: 'Events' }
                ],
                events: results[id]
                });
            });
        });
    });

// Exports 'eventRouter' data
module.exports = eventRouter;