import { logOut } from "../../utilities/users-service"
import { Link } from "react-router-dom"

import styles from '../Home/Home.module.scss'

export default function Home({setUser}){
    function handleLogOut(){
        logOut()
        setUser(null)
    }

    return(
        <>
            <h1 className={styles.homeText}>Home Page</h1>
            <button className={styles.logoutBtn} onClick={handleLogOut}>Log out</button>

            {/* tictactoe */}
            <div className={styles.gamesBox}>
                <div className={styles.gameList}>
                    <h2 className={styles.gameTxt1}>Tic Tac Toe:</h2>
                    <div className={styles.ticTacToe}><Link to={`/tictactoe`} target="_blank">TicTacToe</Link></div>
                </div>
            </div>

            {/* rockpaperscissorslizardspock */}
            <div className={styles.gamesBox}>
                <div className={styles.gameList}>
                    <h2 className={styles.gameTxt1}>Rock Paper Scissors Lizard Spock:</h2>
                    <div className={styles.ticTacToe}><Link to={`/rockpaperscissorslizardspock`} target="_blank">RockPaperScissorsLizardSpock</Link></div>
                </div>
            </div>

            {/* rockpaperscissors */}
            <div className={styles.gamesBox}>
                <div className={styles.gameList}>
                    <h2 className={styles.gameTxt1}>Rock Paper Scissors:</h2>
                    <div className={styles.ticTacToe}><Link to={`/rockpaperscissors`} target="_blank">OG RockPaperScissors</Link></div>
                </div>
            </div>

            {/* pokemon */}
            <div className={styles.gamesBox}>
                <div className={styles.gameList}>
                    <h2 className={styles.gameTxt1}>Pokemon:</h2>
                    <h3 className={styles.h3Txt1}>Made by: <a href="https://www.linkedin.com/in/moris-khoudari-abady/" target="_blank">Moris Khoudari</a></h3>
                    <div className={styles.ticTacToe}><a href="https://poke-clone.netlify.app/" target="_blank">Pokemon</a></div>
                </div>
            </div>
            
        </>
    )
}