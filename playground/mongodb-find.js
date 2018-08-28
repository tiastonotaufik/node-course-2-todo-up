// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db )=>{
    if (err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected Success MongoDB');

    //--select by _id:123 
    // db.collection('Users').find({_id:123}).toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch users', err)
    // });

    //--select * from Users
    // db.collection('Users').find().toArray().then((docs) => {
    //     console.log('Users');
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch users', err)
    // });

    //--select jumlah record
    // db.collection('Users').find().count().then((count) => {
    //     console.log(`Users count: ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch users', err)
    // });

    //--select by name to array 
    db.collection('Users').find({name: 'taufik'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    });



    db.close();

});