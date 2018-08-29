// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db )=>{
    if (err) {
        return console.log('unable to connect to MongoDB server');
    }
    console.log('Connected Success MongoDB');

    //--DeleteMany 
//    db.collection('Todos').deleteMany({text: 'Something to do'}).then((result) =>{
//        console.log(result);
//    });

   //--DeleteOne
//    db.collection('Todos').deleteOne({text: 'Something to do'}).then((result) =>{
//    console.log(result);
//    });
    
   //--findOneAndDelete
   db.collection('Todos').findOneAndDelete({completed: 'false'}).then((result) =>{
   console.log(result);
   });





    db.close();

});