

const express = require('express')
const cors = require("cors")
const querystring = require('querystring')
const app = express()


const USERS = [
    {
        "email": "ja@gmail.com" ,
        "password": "123",
        "name": "Sam",
        "famName": "Cherry",
        "id": "972365"
    },
    {
        "email": "nein@gmail.com" ,
        "password": "456",
        "name": "Nic",
        "famName": "Schaufler",
        "id": "934875"
    },
    {
        "email": "HAHAHA" ,
        "password": "789",
        "name": "Sandra",
        "famName": "Heidelberg",
        "id": "123456"
    },
    {
        "email": "besterSchwertkämpfer@" ,
        "password": "789",
        "name": "Sandra",
        "famName": "Heidelberg",
        "id": "876542"
    }
]

var bodyParser = require('body-parser')//add this

app.use(bodyParser())//add this before any route or before using req.body
app.use("/", express.static("dist/my-app"));
// var corsOptions ={
//     origin: "*"
// }
app.use(cors())
app.post('/LogIn/', (req, res) => {
    for (const user of USERS) {//For-of-loop over this.users
         
        if (req.body.email == user.email && req.body.password == user.password) {
            res.send({"id":user.id});
            return
        }
        
    }
    res.send({"id":""});
})
app.get('/user', (req, res) => {
    for (const user of USERS) {//For-of-loop over this.users
         
        if (req.query.id == user.id) {
            res.send({password: "*******",...user});
            return
        }
        
    }
    res.send({"email": "Failed to load","password": "Failed to load","name":"Failed to load","famName":"Failed to load", "id":"Failed to load"});
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 8000;
}
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})