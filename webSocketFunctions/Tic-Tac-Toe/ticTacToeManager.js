const games = []

exports.games = games

exports.getGames = () =>
  games.map((g) => {
    const { players, ...game } = g;
    return {
      ...game,
      numberOfPlayers: players.length,
    }
  })

exports.createGame = (player, lobbyName) => {
    const game = {
        game: lobbyName,
        players: [player],
        board: ["","","","","","","","","",],
        turn: true
    }
    games.push(game)
}

exports.joinGame = (player, gameName) => {
  const foundGame = games.find(game=>game.game==gameName)
  foundGame.players.push(player)
}

exports.move = (updatedGame) => {
  const foundGame = games.find(game=>game.game==updatedGame.game)
  foundGame.board = updatedGame.board
  foundGame.turn == true ? foundGame.turn = false : foundGame.turn = true
}