import { useState, useEffect } from "react";
import styles from '../RockPaperScissorsLizardSpock.module.scss'


export default function RPSLS_MultiPlayer({socket, roundResult, player, currentGame, games, setRoundResult}){
    
    const selection = ["🧱", "📰", "✂️", "🦎", "🖖"]
    const [userSelection, setUserSelection] = useState(null)
    const [restart, setRestart] = useState(null)    

    const foundGame = games.find(game=>game.name==currentGame)
    
    useEffect(()=>{
      socket.on('restart',()=>{
        setUserSelection(null)
        setRestart(null)
        setRoundResult(null)
      })
    }, [games])


    const clickHandler =  (value) => {

      if(socket){
        switch(player){
          case "1":
            socket.emit('play', {
              play: value,
              game: currentGame,
              player: 1
            })
            break
          case "2":
            socket.emit('play',{
              play: value,
              game: currentGame,
              player: 2
            })
            break
        }
        setUserSelection(value)
      }else{
        alert("Connection Error!")
      }
    }

    const gameRestart = () => {
      if(socket){
        socket.emit('restart', {
          player: player,
          game: currentGame
        })
        setRestart(true)
      }
    }

    return(
        <>
            <h1 className={styles.h1Txt}>Rock Paper Scissors Lizard Spock</h1>
            <div>
              <div className="container">
                <div className="section">
                  <div className="info">
                    <h3>You</h3>
                  </div>
                  <div className="show">{userSelection}</div>
                </div>
      
                <div className="section">
                  <div className="info">
                    <h3>Opponent</h3>
                  </div>
                  <div className="show computer">{roundResult?
                  (player=="1"?roundResult.p2CurrentPlay:roundResult.p1CurrentPlay):
                  "Waiting For Opponent"}</div>
                </div>
              </div>
              {roundResult?<h2 className={styles.h2Txt}>
                {roundResult.roundWinner == "draw"?
                "ITS A DRAW! 💥 ":
                roundResult.roundWinner==player?
                "YOU WON! 🎉":
                "YOU LOSE! 👎 "}
              </h2>:""}
              
              <div className="attack-btn">
                {!userSelection? selection.map((select, index) => (
                  <button key={index} onClick={() => clickHandler(select)}>
                    {select}
                  </button>
                )):""}
              </div>
              <div>
                {roundResult?
                <>
                  {!restart?
                    <button onClick={gameRestart}>Play another round</button>:
                  <h2>Waiting For opponent</h2>}
                </>:""}
              </div>
              <div>
                <h2>Wins:{player==1?foundGame.p1Wins:foundGame.p2Wins}</h2>
                <h2>Losses:{player==1?foundGame.p2Wins:foundGame.p1Wins}</h2>
              </div>
          </div>
        </>
    )
}