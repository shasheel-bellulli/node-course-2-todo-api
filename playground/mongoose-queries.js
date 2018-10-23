const {ObjectId} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/Todo')
const {User} = require('./../server/models/User')

var id = '5bcdd3c0b8d9044a84ca32e0'

User.findById(id).then((user) => {
    if(!user) {
       return console.log('USer Not found')
    }

    console.log(`Found the below user ${user}`)

}).catch((e) => {
    console.log(e)
})

/* var id = '5bcf08eab3fb966ccceb510977'

*/
/* 
Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos)
})

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todos', todo)
})
 */

if(!ObjectId.isValid(id)){
    console.log('ID not valid')
} 

Todo.findById(id).then((todo) => {
    if(!todo){
        console.log('No todo found')
    }
    console.log('TodosById', todo)
}).catch((e) => {
    console.log(e)
})