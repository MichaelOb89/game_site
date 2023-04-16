const sendGames = require('./sendGames')
const {play} = require('./RPSManager')

module.exports =({io, socket}) => (updatedGame) => {
    play(updatedGame)
    
}