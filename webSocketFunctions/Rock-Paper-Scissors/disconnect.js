const {removePlayer, removeGame, findGame} = require('./RPSManager')
const sendGames = require('./sendGames')

module.exports = ({io, socket}) => () => {
    if(findGame(socket)){
        const newSocket = removePlayer(socket).players[0].id
        io.to(newSocket).emit('opponentLeft', 'opponent disconnected')
        removeGame(socket)
        sendGames(io)
    }
}