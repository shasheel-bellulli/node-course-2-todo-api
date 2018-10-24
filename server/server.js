var express = require('express')
var bodyParser = require('body-parser')

var {mongoose} = require('./db/mongoose.js')
var {Todo} = require('./models/Todo')
var {User} = require('./models/User')

const {ObjectId} = require('mongodb')
const port = process.env.PORT || 3000
var app = express()
app.use(bodyParser.json())
app.post('/todos', (req, res) => {
var todo = new Todo({
    text: req.body.text
})

todo.save().then((doc) => {
    res.send(doc)
}, (e) => {
    res.status(400).send(e)
})
console.log(req.body)
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos})
    }), (e) => {
        res.status(400).send(e)
    }
})

app.get('/todos/:id', (req, res) => {
    var id = req.params.id

    if(!ObjectId.isValid(id)) {
       return res.status(404)
        .send({})
    }
    Todo.findById(id).then((todo) => {
        if(!todo) {
           return res.status(404).send()
        }
        res.status(200).send({todo})
    }).catch((e) => {
        res.status(404).send()
    })
})

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id

    if(!ObjectId.isValid(id)) {
       return res.status(404)
        .send({})
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo) {
           return res.status(404).send()
        }
        res.status(200).send({todo})
    }).catch((e) => {
        res.status(404).send()
    })
})


app.listen(port,() => {
    console.log(`Started on port ${port}`)
})

module.exports = {app}