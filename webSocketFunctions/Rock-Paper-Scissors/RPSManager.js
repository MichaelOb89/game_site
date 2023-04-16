const games = []

exports.games = games

exports.getGames = () => 
    games.map((g)=>{
        const {players, ...game} = g
        return{
            ...game,
            numberOfPlayers: players.length
        }
    })


exports.createGame = (player, lobbyName) => {
    const game = {
        name: lobbyName,
        players: [player],
        // player1: player,
        // player2: null,
        p1Wins: 0,
        p2Wins: 0,
        p1CurrentPlay: null,
        p2CurrentPlay: null
    }
    games.push(game)
}

exports.joinGame =(player, gameName) => {
    const foundGame = games.find(game=>game.name==gameName)
    foundGame.players.push(player)
}

exports.play = (updatedGame) => {
    const foundGame = games.find(game=>game.name==updatedGame.game)
    if(updatedGame.player == 1){
        foundGame.p1CurrentPlay = updatedGame.play
    }else if(updatedGame.player == 2){
        foundGame.p2CurrentPlay = updatedGame.play
    }
    console.log(foundGame)
}