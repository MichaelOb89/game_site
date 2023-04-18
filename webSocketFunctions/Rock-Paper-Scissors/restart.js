const sendGames = require('./sendGames')
const {restart} = require('./RPSManager')

module.exports = ({io, socket}) => (game) => {
    restart(game)
    sendGames(io)
    io.emit('restart', 'Restart')
}