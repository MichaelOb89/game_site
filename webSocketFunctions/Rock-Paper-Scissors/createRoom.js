const {games, createGame} = require('./RPSManager')
const sendGames = require('./sendGames')

module.exports = ({io, socket}) => (lobbyName) => {
    const id = createGame(socket, lobbyName)
    io.to(socket.id).emit('roomCreated', id)
    sendGames(io)
}