const {games, joinGame} = require('./RPSManager')
const sendGames = require('./sendGames')

module.exports = ({io, socket}) => (gameId) => {
    joinGame(socket, gameId)
    sendGames(io)
}