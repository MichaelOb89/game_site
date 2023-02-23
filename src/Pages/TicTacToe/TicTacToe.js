import styles from "./TicTacToe.module.scss"

export default function TicTacToe(){
    return(
        <>
            <h1>Tic Tac Toe</h1>
            <div id={styles.wrapper}>
                <div className={styles.square} id={styles.one}></div>
                <div className={styles.square} id={styles.two}></div>
                <div className={styles.square} id={styles.three}></div>
                <div className={styles.square} id={styles.four}></div>
                <div className={styles.square} id={styles.five}></div>
                <div className={styles.square} id={styles.six}></div>
                <div className={styles.square} id={styles.seven}></div>
                <div className={styles.square} id={styles.eight}></div>
                <div className={styles.square} id={styles.nine}></div>
            </div>
            <h2>Score</h2>
            <h3 id={styles.x}>X has won 0 games</h3>
            <h3 id={styles.o}>O has won 0 games</h3>
        </>
    )
}