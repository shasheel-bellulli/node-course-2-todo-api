//const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if(err){
  return console.log('unsbale to connect tp mongodb')
}
console.log('Connected to Mongodb server')
const db = client.db('TodoApp')

/* db.collection('Todos').find({
    _id: new ObjectID('5bc85dc536cfecd03b92544f')
}).toArray().then((docs) => {
console.log(JSON.stringify(docs, undefined, 2))
})
 */

 /* db.collection('Todos').findOneAndDelete({
     completed: false
 }).then((result) => {
     console.log(result)
 }) */

db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5bc858517bfcc45b60dfb70a')
}).then((result) => {
console.log(result)
})

client.close()
})