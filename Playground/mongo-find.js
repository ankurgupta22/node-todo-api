const {
    MongoClient,
    ObjectID
} = require('mongodb');

var url = 'mongodb://localhost:27017';

MongoClient.connect(url, (err, client) => {

    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    // Client returned
    var db = client.db('TodoApp');
    console.log("MongoDB connected", client.isConnected());

    // db.collection('Todos').find({_id:new ObjectID('5a82684285127d13045e75a6')}).toArray().then((docs) => {
    //     // docs.forEach(element => {
    //     //     console.log(element);
    //     // });

    //     console.log(JSON.stringify(docs,undefined,3));

    // }, (err) => {
    //     console.log("Unable to fetch todos");

    // });

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos Count: ${count}`);

    }, (err) => {
        console.log("Unable to fetch todos");

    });

    client.close();
});