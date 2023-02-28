require('dotenv').config()
require('./config/database')
const express = require('express')
const { createServer } = require("http");
const { Server } = require("socket.io");
const logger = require('morgan')
const path = require('path')
const PORT = process.env.PORT || 3001

const app = express()
const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

io.on("connection", (socket) => {
    console.log("New socket connected")
  });

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

httpServer.listen(PORT, () => {
    console.log(`Listening on ${PORT}`)
})