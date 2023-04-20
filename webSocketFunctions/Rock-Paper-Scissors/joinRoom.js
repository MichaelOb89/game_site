const {games, joinGame} = require('./RPSManager')
const sendGames = require('./sendGames')

module.exports = ({io, socket}) => (gameName) => {
    joinGame(socket, gameName)
    sendGames(io)
}