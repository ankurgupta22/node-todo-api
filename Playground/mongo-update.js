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

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a826922a3160e0d5c8b82af')

    }, {
        $set: {
            completed: true
        }

    }, {
        returnOriginal: false
    }).then((result) => console.log(result));

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5a827bb391c55d0f681b4e94')
    }, {
        $set: {
            name: 'Shaurya'
        },
        $inc: { age: 1}
    }, {
        returnOriginal: false
    }).then((res) => {
           console.log(res);
            
    }).catch((err) => console.log(err.message)); 

    client.close();
});