import styles from "../WaitingScreen/WaitingScreen.module.scss";




export default function WaitingScreen(props){




    return(
        <>
            <span className={styles.loadingScreen}>
                <h1 className={styles.waitingForOpp}>Waiting For Opponent</h1>
            </span>
        </>
    )
}