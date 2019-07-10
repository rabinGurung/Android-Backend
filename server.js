const express = require('express')
const app = express()
const bodyParser = require('body-parser')  //body parser helps parse json object
const server = require('http').Server(app)
const io = require('socket.io')(server)

// const Chatkit = require('@pusher/chatkit-server');
// for using .env 
const dotenv = require('dotenv')
dotenv.config()

const port = process.env.PORT || 3000

// for routes
const login = require('./Routes/login')
const signup = require('./Routes/signup')
const dashboard = require('./Routes/Dashboard')
const user = require('./Routes/user')
const authenticate = require('./Routes/authenticate')
const upload = require('./Routes/upload')
const firend = require('./Routes/firend')
const post = require('./Routes/post')
const comment = require('./Routes/comment')
const admin = require('./Routes/admin')
// this is the access control
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    next()
})

// setting up static view directory
var publicDir = require('path').join(__dirname, '/Resources');
app.use(express.static(publicDir)); 

//uses boby-parse to parse json object
app.use(bodyParser.json())



io.on('connection', function (socket) {
    console.log('connected')
    socket.emit('title','Hello there...,Welcome to the chat')
    socket.on('message',({message,username})=>
    {
      io.sockets.emit('incommingMessage',{message,username})
    })

    socket.on('typing',(data)=>{
      socket.broadcast.emit('ontypedmessage',data)
    })
  });


app.use('/user',login)
app.use('/user',signup)
app.use('/user',user)
app.use('/dash',dashboard)
app.use('/user',authenticate)
app.use('/user',upload)
app.use('/friend',firend)
app.use('/post',post)
app.use('/comment',comment)

app.use('/admin',admin)
server.listen(port)

module.exports = app