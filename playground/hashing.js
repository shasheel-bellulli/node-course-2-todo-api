const {SHA256} = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

/*
bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, (err, hash) => {
        console.log('Hash :',hash)
    })
})
 */
var password = '123abc'
var hashedPassword = '$2a$10$op.uwTdGkSPylEUQJ58jk.cWszsHybZdj3/0zM2BQThtcJLXl.7PS'

bcrypt.compare(password, hashedPassword, (err, res) => {
    console.log(res)
})
var data = {
    id: 10
}

var token = jwt.sign(data, '123abc')
console.log('token : ' , token)

var decoded = jwt.verify(token, '123abc')
console.log('decoded : ' , decoded)
/* var message = 'I am a user shasheel'
var hash = SHA256(message).toString()
console.log('Message : ' , message)
console.log('Hash  : ', hash)

var data = {
    id : 4
}

var token = {
    data,
    hash: SHA256(JSON.stringify(data) + 'shasheel').toString()    
}

token.data.id = 5
token.hash = SHA256(JSON.stringify(token.data.id)).toString()

var resultHash = SHA256(JSON.stringify(token.data) + 'shasheel').toString()
if(resultHash === token.hash){
console.log('Data was not changed')
}else {
    console.log('Data was modified , do not trust')
} */