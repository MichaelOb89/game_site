const sendGames = require('./sendGames')
const { play, games } = require('./RPSManager')

module.exports =({io, socket}) => (updatedGame) => {
    play(updatedGame)
    sendGames(io)
    const foundGame = games.find(game=>game.name==updatedGame.game)
    const { players, ...game } = foundGame
    if(foundGame.p1CurrentPlay && foundGame.p2CurrentPlay){
        io.emit("finishRound", {...game})
        console.log(game)
    }
}