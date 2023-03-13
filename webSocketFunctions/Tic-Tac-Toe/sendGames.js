const { getGames } = require('./ticTacToeManager')

module.exports = (sender) => {
    sender.emit('games', getGames())
}