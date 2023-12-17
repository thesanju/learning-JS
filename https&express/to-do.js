const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;
app.use(bodyParser.json());

const todos = [];

app.get('/todos', (req, res) => {
    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    const todo = todos.find( t => t.id === parseInt(req.params.id));
    if(!todo) {
        res.status(404).send();
    } else {
        res.json(todo);
    }
});

app.post('/todos', (req, res) => {
    const newTodo = {
        id: Math.floor(Math.random() * 1000000),
        title: req.body.title,
        description: req.body.description
    }
    todos.push(newTodo);
    res.status(200).send();
})

app.listen(port, () => {
    console.log(`app is listening on port: ${port}`)
})