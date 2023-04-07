import { useEffect, useState } from 'react';

import styles from '../RockPaperScissorsLizardSpock.module.scss';

export default function RPSLS_SinglePlayer(){
    const [computerSelection, setComputerSelection] = useState(null)
    const [userSelection, setUserSelection] = useState(null)
    const [finalOutput, setFinalOutput] = useState(null)
    const selection = ["🧱", "📰", "✂️", "🦎", "🖖"]

    const clickHandler = (value) => {
        setUserSelection(value)
        randomChoiceGenerator()
    }

    const randomChoiceGenerator = () => {
        const randomSelection = selection[Math.floor(Math.random() * selection.length)]
        setComputerSelection(randomSelection)
    }

    useEffect(() => {
        {
          switch (userSelection + computerSelection) {
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
              setFinalOutput("YOU WON! 🎉");
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
              setFinalOutput("YOU LOSE! 👎 ");
              break;
            case "🧱🧱":
            case "📰📰":
            case "✂️✂️":
            case "🦎🦎":
            case "🖖🖖":
              setFinalOutput("ITS A DRAW! 💥 ");
              break;
          }
        }
      }, [computerSelection, userSelection])


      return (
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
                    <h3>Computer</h3>
                  </div>
                  <div className="show computer">{computerSelection}</div>
                </div>
              </div>
              <h2 className={styles.h2Txt}>{finalOutput} </h2>
      
              <div className="attack-btn">
                {selection.map((select, index) => (
                  <button key={index} onClick={() => clickHandler(select)}>
                    {select}
                  </button>
                ))}
              </div>
          </div>
        </>
      );

};