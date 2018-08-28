const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db )=>{
    if (err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected Success MongoDB');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) =>{
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //--Insert new doc into Users (name,age,location)
    // db.collection('Users').insertOne({
    //     _id: 123,
    //     name: 'taufik',
    //     age: 23,
    //     location: 'sukoharjo'
    // }, (err, result) =>{
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(result.ops);
    // });

    //--Insert new doc into Users (name,age,location)
    // db.collection('Users').insertOne({
    //     // _id: 123,
    //     name: 'taufik',
    //     age: 23,
    //     location: 'sukoharjo'
    // }, (err, result) =>{
    //     if (err) {
    //         return console.log('Unable to insert user', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();

});