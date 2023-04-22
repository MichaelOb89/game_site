const sendGames = require('./sendGames')
const {restart, games} = require('./RPSManager')

module.exports = ({io, socket}) => (game) => {
    restart(game)
    sendGames(io)
    const foundGame = games.find(g=>g.name==game.game)
    if(foundGame.p1Restart && foundGame.p2Restart){
        foundGame.p1Restart = null
        foundGame.p2Restart = null
        io.emit('restart', "restart")
    }
}