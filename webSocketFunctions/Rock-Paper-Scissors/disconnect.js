const {removePlayer, removeGame, findGame} = require('./RPSManager')
const sendGames = require('./sendGames')

module.exports = ({io, socket}) => () => {
    const foundGame = findGame(socket)
    if(foundGame && foundGame.players.length==2){
        const newSocket = removePlayer(socket).players[0].id
        io.to(newSocket).emit('opponentLeft', 'opponent disconnected')
        removeGame(socket)
        sendGames(io)
    }else if(foundGame && foundGame.players.length==1){
        removeGame(socket)
        sendGames(io)
    }
}