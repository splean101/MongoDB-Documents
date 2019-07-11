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
    //const res = await coll.insertMany(games); //adding all documents
    //console.log(res);
    //const updShatter = await coll.updateOne({_name: 'Shatter'}, {$set: {_price: 15}}); //updating price
    //const updAsteria = await coll.updateOne({_name: 'Asteria'}, {$set: {_price: 5}}); //updating price
    //const updDoom = await coll.updateOne({_name: 'Doom'}, {$set: {_price: 40}}); //updating price
    //const consoleAll = await coll.find().toArray(); //consoling all documents
    //console.log(consoleAll);
    //const getAsteria = await coll.findOne({_name: 'Asteria'}); //getting by name
    //console.log(getAsteria);
    /*const getAllName = await coll.find().forEach(res => {  //getting all names
        if(res._name) console.log(res._name);
    });*/
    //const sortByGenre = await coll.find().sort({_genre: 1}).toArray();  //getting sorted by genre
    //console.log(sortByGenre);
    const delByPlatform = await coll.deleteMany({_platform: 'Playstation 4'});
    console.log(delByPlatform.result);
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
