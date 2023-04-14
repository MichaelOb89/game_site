const {games, createGame} = require('./RPSManager')
const sendGames = require('./sendGames')

module.exports = ({io, socket}) => (lobbyName) => {
    createGame(socket, lobbyName)
    sendGames(io)
}