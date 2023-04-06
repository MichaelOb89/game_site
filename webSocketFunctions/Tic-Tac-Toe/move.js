const { getGames, games, move } = require('./ticTacToeManager')
const sendGames = require('./sendGames')


module.exports = ({io, socket}) => (updatedGame) => {
    move(updatedGame)
    io.emit('moveMade', getGames())
}