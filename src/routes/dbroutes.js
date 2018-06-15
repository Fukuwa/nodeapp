// Reference to express package
var express = require('express');
var dbRouter = express.Router();
var mongodb = require('mongodb').MongoClient;


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
 * Adds data to mongodb with route 'Db/AddEventData'
 * MongoDB holds data in collection containers (tables in relative db)
 * Creates collection, if not already present
 */
dbRouter.route('/AddEventData')
    .get(function(req, res){
        //res.send('Successful route test!');

        // Opens a connection to a database via URL
        var url = 'mongodb://localhost:27017';
        // Mongodb holds collection
        mongodb.connect(url, function(err, client){
            var db = client.db('eventsApp');
            // Sends results back to page, so operation result is can be seen
            db.collection('events').insertMany(eventsData, function(err, results){
                res.send(results);
                client.close();
            });
        });
    });

// Exports 'eventRouter' data
module.exports = dbRouter;