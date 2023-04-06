const {games, joinGame} = require('./ticTacToeManager')
const sendGames = require('./sendGames')

module.exports = ({io, socket}) => (gameName) => {
    joinGame(socket, gameName)
    sendGames(io)
}