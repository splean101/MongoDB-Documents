const MongoClient = require('mongodb').MongoClient;

const games = {
    name: ['Shatter', 'Clutch', 'Asteria', 'Zombi', 'Doom'],
    platform: ['PC', 'PC', 'PC', 'Playstation 4', 'Playstation 4'],
    developer: ['Sidhe Interactive', 'Targem Games', 'Legend Studio', 'Ubisoft Montpellier', 'id Software'],
}

MongoClient.connect(
    'mongodb://localhost:27017',
    {useNewUrlParser: true},
    (err, client) => {
        const db = client.db('gamesdb');
        db.collection('games', (err, collection) => {
            collection.insertMany()
        })
    }
)