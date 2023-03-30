const {games, joinGame} = require('./ticTacToeManager')

module.exports = ({io, socket}) => (gameName) => {
    joinGame(socket, gameName)
}