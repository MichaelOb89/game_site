require('dotenv').config()
require('./config/database')
const express = require('express')
const cors = require('cors')
const { createServer } = require("http");
const socketIo = require("socket.io");
const logger = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 3001

//===========GAME MANAGER FUNCTIONS FOR TIC-TAC-TOE=============
const createRoom = require('./webSocketFunctions/Tic-Tac-Toe/createRoom')
const sendGames = require('./webSocketFunctions/Tic-Tac-Toe/sendGames')
const joinRoom = require('./webSocketFunctions/Tic-Tac-Toe/joinRoom')
const move = require('./webSocketFunctions/Tic-Tac-Toe/move')
//===========GAME MANAGER FUNCTIONS FOR RPS=============
const createRPSRoom = require('./webSocketFunctions/Rock-Paper-Scissors/createRoom')
const sendRPSGames = require('./webSocketFunctions/Rock-Paper-Scissors/sendGames')
const joinRPSRoom = require('./webSocketFunctions/Rock-Paper-Scissors/joinRoom')
const playRPS = require('./webSocketFunctions/Rock-Paper-Scissors/play')
const disconnectRPS = require('./webSocketFunctions/Rock-Paper-Scissors/disconnect')

const app = express()
const httpServer = createServer(app);
const io = socketIo(httpServer);

app.use(cors())

app.use(express.json())
app.use((req, res, next)=>{
    res.locals.data = {}
    next()
})
app.use(logger('dev'))
app.use(express.static(path.join(__dirname, 'build')))

app.use(require('./config/checkToken'))

app.use('/api/users', require('./routes/api/users'))

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

io.on("connection", (socket) => {
    console.log(`New socket ${socket.id} connected`)
    socket.emit('connected', 'Connection estabilished')
    socket.on('gameSelect', (game)=>{
        switch(game){
            case "RPSLS":
                sendRPSGames(socket)
                socket.on('createRoom', createRPSRoom({io, socket}))
                socket.on('joinRoom', joinRPSRoom({io, socket}))
                socket.on('play', playRPS({io, socket}))
                socket.on('disconnect', disconnectRPS({io, socket}))
                break
            default:
                sendGames(socket)
                socket.on('createRoom', createRoom({io, socket}))
                socket.on('joinRoom', joinRoom({io, socket}))
                socket.on('move', move({io, socket}))
                break
        }
    })
    // sendGames(socket)
    // socket.on('createRoom', createRoom({io, socket}))
    // socket.on('joinRoom', joinRoom({io, socket}))
    // socket.on('move', move({io, socket}))
});

httpServer.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})