const {games, joinGame} = require('./ticTacToeManager')

module.exports = ({io, socket}) => (gameName) => {
    socket.join(gameName)
    joinGame(socket, gameName)
}