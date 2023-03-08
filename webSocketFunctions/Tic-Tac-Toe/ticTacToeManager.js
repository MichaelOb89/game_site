const games = []

exports.sendGames = () => {
    games.map((el)=>{
        return{
            players: el.players.length,
        }
    })
}

exports.createGame = (player) => {
    const game = {
        game: "Tic-Tac-Toe",
        players: [player]
    }
    games.push(game)
}

exports.games