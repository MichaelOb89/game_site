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

            <div className={styles.gamesBox}>
                <div className={styles.gameList}>
                    <h2 className={styles.gameTxt1}>Game:</h2>
                    <div className={styles.ticTacToe}><Link to={`/tictactoe`}>TicTacToe</Link></div>
                </div>
            </div>


            {/* <div className={styles.gamesList}>
                <div><Link to={`/tictactoe`}>TicTacToe</Link></div>
                <div><Link to={`/tictactoe`}>TicTacToe</Link></div>
                <div><Link to={`/tictactoe`}>TicTacToe</Link></div>

            </div> */}
            
        </>
    )
}