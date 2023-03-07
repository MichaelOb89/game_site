import { useState, useEffect } from "react"
import styles from "./TicTacToe.module.scss"
import Square from "./Components/Square"
import io from "socket.io-client"

export default function TicTacToe(){
    const [turn, setTurn] = useState(true)
    const [board, setBoard] = useState(["","","","","","","","","",])
    const socket = io()
    socket.on('connect', () => {
        console.log(socket.id)
    })
    const checkWinner = () => {
        const winConditions =[
            [board[0], board[1], board[2]],
            [board[3], board[4], board[5]],
            [board[6], board[7], board[8]],
            [board[0], board[3], board[6]],
            [board[1], board[4], board[7]],
            [board[2], board[5], board[8]],
            [board[0], board[4], board[8]],
            [board[2], board[4], board[6]]
        ]
        for(let win of winConditions){
            if(win[0]=="X" && win[1]=="X" && win[2]=="X"){
                alert("X is winner")
            }else if(win[0]=="O" && win[1]=="O" && win[2]=="O"){
                alert("O is winner")
            }
        }
    }
    useEffect(()=>{
        checkWinner()
    },[board])

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