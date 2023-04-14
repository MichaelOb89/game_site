const { getGames } = require('./RPSManager')

module.exports = (sender) => {
    sender.emit('games', getGames())
}