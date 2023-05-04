const games = []

let gameId=1

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
          game.roundWinner = 1
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
          game.roundWinner = 2
          break;
        case "🧱🧱":
        case "📰📰":
        case "✂️✂️":
        case "🦎🦎":
        case "🖖🖖":
          game.roundWinner = "draw"
          //console.log("DraW")
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

exports.findGame = (socket) => {
    return games.find(g=>g.players.includes(socket))
}

exports.removePlayer = (socket) => {
    const i = games.findIndex(g=>g.players.includes(socket))
    if(i!=-1){
        const j = games[i].players.findIndex(p=>p==socket)
        games[i].players.splice(j,1)
        return games[i]
    }
}

exports.removeGame = (socket) => {
    const i = games.findIndex(g=>g.players.includes(socket))
    games.splice(i,1)
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
        p2CurrentPlay: null,
        roundWinner: null,
        p1Restart: null,
        p2Restart: null,
        id: gameId
    }
    gameId++
    games.push(game)
    return game.id
}

exports.restart = (game) => {
    const foundGame = games.find(g=>g.id==game.game)
    //console.log(game)
    if(game.player==1){
        foundGame.p1Restart = true
    }else{
        foundGame.p2Restart = true
    }
    if(foundGame.p1Restart && foundGame.p2Restart){
        foundGame.p1CurrentPlay = null
        foundGame.p2CurrentPlay = null
        foundGame.roundWinner = null
        //foundGame.p1Restart = null
        //foundGame.p2Restart = null

    }
}

exports.joinGame =(player, gameId) => {
    console.log(gameId)
    const foundGame = games.find(game=>game.id==gameId)
    foundGame.players.push(player)
}

exports.play = (updatedGame) => {
    const foundGame = games.find(game=>game.id==updatedGame.game)
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
