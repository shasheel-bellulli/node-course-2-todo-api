const {ObjectID} = require('mongodb')
const jwt = require('jsonwebtoken')
const {Todo} = require('./../../models/Todo')
const {User} = require('./../../models/User')

const userOneId = new ObjectID()
const userTwoId = new ObjectID()
const users = [{
    _id: userOneId,
    email: 'vickytom5@gmail.com',
    password: 'userOnePass',
    tokens: [{
        access: 'auth',
        token: jwt.sign({ _id: userOneId, access: 'auth'}, 'abc123'.toString())
    }]
}, {
    _id: userTwoId,
    email: 'shasheel@gmail.com',
    password: 'userTwoPass'    
}]
const todos = [{
    _id: new ObjectID(),
    text: 'first test todo',
    completed: false
}, {
    _id: new ObjectID('5bcf2becc3ac091bd4ac5d07'),
    text: 'second test todo',
    completed: true,
    completedAt: 333
}]

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos)
    }).then(() => done())
}

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save()
        var userTwo = new User(users[1]).save()

       return Promise.all([userOne, userTwo])
    }).then(() => done())
}
module.exports = {todos, populateTodos, users, populateUsers}