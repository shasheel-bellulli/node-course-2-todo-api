//const MongoClient = require('mongodb').MongoClient

const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
if(err){
  return console.log('unsbale to connect tp mongodb')
}
console.log('Connected to Mongodb server')
const db = client.db('TodoApp')

/* db.collection('Todos').findOneAndUpdate({
    _id: new ObjectID('5bc85dc536cfecd03b92544f')
}, {
    $set: {
       completed: true 
    }
}, {
    returnOriginal: false
}).then((result) => {
    console.log(result)
}) */

db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bc85b75f6201e10fce3bb8a')
}, {
    $set: {
        Name: 'Belllulli'
    },
    $inc: {
        Age: 5
    }
}, {
    returnOriginal: false
}).then((result) => {
console.log(result)
})
client.close()
})