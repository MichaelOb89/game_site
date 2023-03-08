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
const {sendGames, createGame, games} = require('./webSocketFunctions/Tic-Tac-Toe/ticTacToeManager')

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
    socket.emit('games', games)////////NEXT STEP IS TO FIND HOW TO SEND THE GAMES TO THE CLIENT
    console.log(games)
    socket.on('createRoom', createRoom({io, socket}))
});

httpServer.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})