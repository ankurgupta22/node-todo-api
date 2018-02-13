// const MongoClient = require('mongodb').MongoClient;
    
const {MongoClient} = require('mongodb');

//*** Please not from version 3.* calling db.collection has been changed as below. Before 3.* 
//MongoClient.connect('mongodb://localhost:27017/CollectionName',(err,db) => {
// then db can be used for query collections directly and no need to generate db = client.db...
// db.isConnected and db.close()
var url = 'mongodb://localhost:27017';

MongoClient.connect(url,(err,client) => {

if (err) {
    return console.log("Unable to connect to MongoDB server");
}

// Client returned
var db = client.db('TodoApp');

console.log("MongoDB connected", client.isConnected());


// db.collection("Todos").insertOne({
//     text:'Something to do',
//     completed:false
// }, (err,result) => {
//     if (err) {
//         console.log("Unable to insert todo", err);    
//     }
//     console.log(JSON.stringify(result.ops, undefined, 3));
    
    
// });

db.collection("Users").insertOne({
    name:'Ankur',
    age:33,
    location:'noida'
}, (err,result) => {
    if (err) {
        console.log("Unable to insert User", err);    
    }
    console.log(result.ops);
    
    
});


client.close();


});