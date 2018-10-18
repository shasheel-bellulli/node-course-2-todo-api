//const MongoClient = require('mongodb').MongoClient

const {MongoClient} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if(err){
  return console.log('unsbale to connect tp mongodb')
}
console.log('Connected to Mongodb server')
const db = client.db('TodoApp')
/* db.collection('Todos').insertOne({
    test: 'something to do 2',
    completed: false
}, (err, result) => {
    if(err) {
        return console.log('unable to insert todo', err)
    }
    console.log(JSON.stringify(result.ops, undefined, 2))
}) */

/* db.collection('Users').insertOne({
    Name: 'Shasheel',
    Age: 34,
    Location: 'Sweden'
}, (err, result) => {
    if(err){
        return console.log('unable to insert the user doc', err)
    }
    console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2))
}) */



client.close()
})