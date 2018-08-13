//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb'); // creates variablee which equals to the properties

var obj = new ObjectID();

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    db.collection('Todos').insertOne({
        text: 'Walk the dog',
        completed: false
    }, (err, result) => {
        if(err) {
            return console.log('Unable to insert Todo');
        }
        console.log(JSON.stringify(result.ops));
    });

    // db.collection('Users').insertOne({
    //     name: "Sunny",
    //     age: 25,
    //     location: "Ilmenau"
    // }, (err, result) => {
    //     if(err) {
    //         return console.log(err);
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })
    client.close();
});