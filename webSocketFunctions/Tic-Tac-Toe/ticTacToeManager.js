const games = []

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
    }
    games.push(game)
}

exports.joinGame = (player, gameName) => {
  const foundGame = games.find(game=>game.game==gameName)
  foundGame.players.push(player)
}