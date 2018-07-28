const mongodb = require('mongodb');


let connectionStr = 'mongodb://localhost:27017/pets'

mongodb
    .MongoClient
    .connect(connectionStr)
    .then(client => {
        let db = client.db('pets');

        let dogs = db.collection('dogs');

        console.log(db);

        dogs.insert({
            name: 'mailo',
            age: 3,
            color: 'white'
        })
    });