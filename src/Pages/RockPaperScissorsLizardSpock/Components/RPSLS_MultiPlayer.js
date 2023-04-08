import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import styles from '../RockPaperScissorsLizardSpock.module.scss'


export default function RPSLS_MultiPlayer({socket, setSocket}){
    
    const selection = ["🧱", "📰", "✂️", "🦎", "🖖"]
    const [userSelection, setUserSelection] = useState(null)
    const [opponentSelection, setOpponentSelection] = useState("Waiting for Opponent to Play")
    
    useEffect(()=>{
        const newSocket = io()
        newSocket.on('connected',()=>{
            newSocket.emit('gameSelect', "RPSLS")
        })
        setSocket(newSocket)
    },[])

    const clickHandler = (evt) => {
        setUserSelection(evt)
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
                  <div className="show computer">{opponentSelection}</div>
                </div>
              </div>
              <h2 className={styles.h2Txt}></h2>
      
              <div className="attack-btn">
                {!userSelection? selection.map((select, index) => (
                  <button key={index} onClick={() => clickHandler(select)}>
                    {select}
                  </button>
                )):""}
              </div>
          </div>
        </>
    )
}