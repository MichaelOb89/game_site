const games = []


exports.games = games

const checkResults = (game) => {
    switch (game.p1CurrentPlay + game.p2CurrentPlay) {
        case "✂️📰":
        case "🧱✂️":
        case "📰🧱":
        case "🦎📰":
        case "🖖✂️":
        case "🧱🦎":
        case "📰🖖":
        case "🖖🧱":
        case "✂️🦎":
        case "🦎🖖":
          game.p1Wins++
          break;
        case "📰✂️":
        case "✂️🧱":
        case "🧱📰":
        case "📰🦎":
        case "✂️🖖":
        case "🦎🧱":
        case "🖖📰":
        case "🧱🖖":
        case "🦎✂️":
        case "🖖🦎":
          game.p2Wins++
          break;
        case "🧱🧱":
        case "📰📰":
        case "✂️✂️":
        case "🦎🦎":
        case "🖖🖖":
          console.log("DraW")
          break;
      }
}


exports.getGames = () => 
    games.map((g)=>{
        const {players, ...game} = g
        return{
            ...game,
            numberOfPlayers: players.length
        }
    })

exports.removeGame = (socket) => {
    const i = games.findIndex(g=>g.players.includes(socket))
    games.splice(i,1)
    console.log(games)
}

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
    if(foundGame.p2CurrentPlay && foundGame.p1CurrentPlay){
        //check for game results here
        checkResults(foundGame)
        }
    }
