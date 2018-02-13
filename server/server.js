var express = require('express');
var bodyParser = require('body-parser');


var mongoose = require('./db/mongoose');

var {todo} = require('./models/todo');
var user = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.get('/', (req,res) => {
    res.send({
        Surname:"Gupta"
    });
});

app.post('/todos', (req, res) => {
    console.log(req.body);
    
    var todoData = new todo({
        text:req.body.text,
        completed:req.body.completed,
        completedAt:req.body.completedAt
    });

    todoData.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });
});


app.listen("3000", () => {
    console.log('Started on port 3000');

});

// var newTodo = new todo({
//     text: 'cook dinner',
//     completed:true,
//     completedAt: 12
// });

// newTodo.save().then((result) => {
//     console.log(`Todo Saved`, result);

// }, (error) => {
//     console.log(`Unable to save todo ${error}`);

// });