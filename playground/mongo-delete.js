const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');
//deleteMany
    // db.collection('Todos').deleteMany({text: 'Something to do'}).then((result)=>{
    //     console.log(result);
    // });  

//deleteOne
    // db.collection('Todos').deleteOne({text: 'Walk the dog'}).then((result) => {
    //     console.log(result);
    // });

//findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });


//Challenge
db.collection('Users').deleteMany({name: 'Sunny'}).then((result) => {
    console.log(result);
});
db.collection('Users').deleteOne({_id: new ObjectID('5b71bff01725e114a0245ce4')}).then((result) => {
    console.log(result);
    
});
    //client.close();
});