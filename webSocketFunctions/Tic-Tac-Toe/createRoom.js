const {games, createGame} = require('./ticTacToeManager')

module.exports = ({io, socket}) => (lobbyName) => {
        socket.join(lobbyName)
        createGame(socket, lobbyName)
}