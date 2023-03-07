module.exports = ({io, socket}) => (lobbyName) => {
        socket.join(lobbyName)
        console.log(lobbyName)
}