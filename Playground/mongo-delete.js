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

    //delete one

    //delete many

    db.collection('').deleteMany({
        text: 'Eat Lunch'
    }).then((result) => {
        //throw Error("ddddd");
        
        console.log("result");
        
    }).catch((err) => {
        console.log(err);
        
     });
        
    
    

    //delete find and delete 


    client.close();
});

