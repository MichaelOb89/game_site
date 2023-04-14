const games = []

exports.games = games

exports.getGames = () => 
    games.map((game)=>{
        return{
            ...game,
            numberOfPlayers: game.players.length
        }
    })


exports.createGame = (player, lobbyName) => {
    const game = {
        name: lobbyName,
        players: [player],
        player1: player,
        player2: null,
        p1Wins: 0,
        p2Wins: 0,
        p1CurrentPlay: null,
        p2CurrentPlay: null
    }
    games.push(game)
}

exports.joinGame =(player, gameName) => {
    const foundGame = games.find(game=>game.name==gameName)
    foundGame.player2 = player
}

exports.play = (updatedGame) => {
    const foundGame = games.find(game=>game.name==updatedGame.name)
    //Game logic and response here!
}