require('dotenv').config()
require('./config/database')
const express = require('express')
const cors = require('cors')
const { createServer } = require("http");
const socketIo = require("socket.io");
const logger = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 3001

//===========GAME MANAGER FUNCTIONS=============
const createRoom = require('./webSocketFunctions/Tic-Tac-Toe/createRoom')
const sendGames = require('./webSocketFunctions/Tic-Tac-Toe/sendGames')
const joinRoom = require('./webSocketFunctions/Tic-Tac-Toe/joinRoom')

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
    sendGames(socket)
    socket.on('createRoom', createRoom({io, socket}))
    socket.on('joinRoom', joinRoom({io, socket}))
});

httpServer.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})