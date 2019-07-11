const MongoClient = require('mongodb').MongoClient;

class Game {
    constructor(name, platform, developer, genre, price) {
        this._name = name;
        this._platform = platform;
        this._developer = developer;
        this._genre = genre;
        this._price = price;
    }
}
const games = [
    new Game('Shatter', 'PC', 'Sidhe Interactive', 'Action', 10),
    new Game('Clutch', 'PC', 'Targem Games', 'Racing', 10),
    new Game('Asteria', 'PC', 'Legend Studio', 'Action', 10),
    new Game('Zombi', 'Playstation 4', 'Ubisoft Montpellier', 'First Person Shooter', 20),
    new Game('Doom', 'Playstation 4', 'id Software', 'First Person Shooter', 20)
];

(async function(){
    const client = await MongoClient.connect('mongodb://localhost:27017', { useNewUrlParser: true });
    const db = client.db('gamesdb');
    const coll = await db.collection('games');
    //const res = await coll.insertMany(games);
    //console.log(res);
    const updOne = await coll.updateOne({_name: 'Shatter'}, {$set: {_price: 5}});
    console.log(updOne.result);
    client.close();    
}());
/*MongoClient.connect(
    'mongodb://localhost:27017',
    { useNewUrlParser: true },
    (err, client) => {
        const db = client.db('gamesdb');
        db.collection('games', (err, collection) => {
            collection.insertMany(games, (err, res) => {
                console.log(res.result);
                console.log(res.ops);
                client.close();

            });
        });
    });*/
