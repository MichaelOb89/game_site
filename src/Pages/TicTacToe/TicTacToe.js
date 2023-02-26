import { useState } from "react"
import styles from "./TicTacToe.module.scss"
import Square from "./Components/Square"

export default function TicTacToe(){
    const [turn, setTurn] = useState("X")
    const [board, setBoard] = useState(["","","","","","","","","",])
    const checkWinner = () => {
        
    }
    return(
        <>
            <h1>Tic Tac Toe</h1>
            <div id={styles.wrapper}>
                <Square board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={1} style={styles.one}/>
                <Square board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={2} style={styles.two}/>
                <Square board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={3} style={styles.three}/>
                <Square board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={4} style={styles.four}/>
                <Square board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={5} style={styles.five}/>
                <Square board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={6} style={styles.six}/>
                <Square board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={7} style={styles.seven}/>
                <Square board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={8} style={styles.eight}/>
                <Square board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={9} style={styles.nine}/>
            </div>
            <h2>Score</h2>
            <h3 id={styles.x}>X has won 0 games</h3>
            <h3 id={styles.o}>O has won 0 games</h3>
        </>
    )
}