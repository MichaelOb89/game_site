const {games, createGame} = require('./ticTacToeManager')
const sendGames = require('./sendGames')

module.exports = ({io, socket}) => (lobbyName) => {
        createGame(socket, lobbyName)
        sendGames(io)
}