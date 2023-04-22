const {removeGame} = require('./RPSManager')
const sendGames = require('./sendGames')

module.exports = ({io, socket}) => () => {
    removeGame(socket)
    sendGames(io)
}