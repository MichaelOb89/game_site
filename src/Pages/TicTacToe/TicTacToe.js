import { useState, useEffect } from "react"
import styles from "./TicTacToe.module.scss"
import Square from "./Components/Square"

export default function TicTacToe({socket, player, currentGame}){
    const [turn, setTurn] = useState(true)
    const [board, setBoard] = useState(["","","","","","","","","",])
    
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

    socket.on('moveMade', (games)=>{
        const foundGame = games.find(game=>game.game == currentGame)
        setBoard(foundGame.board)
        setTurn(foundGame.turn)
    })

    return(
        <>
            <h1 className={styles.tictacTxt}>Tic Tac Toe</h1>
            <div id={styles.wrapper}>
                <Square currentGame={currentGame} player={player} socket={socket} board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={1} style={styles.one}/>
                <Square currentGame={currentGame} player={player} socket={socket} board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={2} style={styles.two}/>
                <Square currentGame={currentGame} player={player} socket={socket} board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={3} style={styles.three}/>
                <Square currentGame={currentGame} player={player} socket={socket} board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={4} style={styles.four}/>
                <Square currentGame={currentGame} player={player} socket={socket} board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={5} style={styles.five}/>
                <Square currentGame={currentGame} player={player} socket={socket} board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={6} style={styles.six}/>
                <Square currentGame={currentGame} player={player} socket={socket} board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={7} style={styles.seven}/>
                <Square currentGame={currentGame} player={player} socket={socket} board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={8} style={styles.eight}/>
                <Square currentGame={currentGame} player={player} socket={socket} board={board} setBoard={setBoard} turn={turn} setTurn={setTurn} squareNumber={9} style={styles.nine}/>
            </div>
            <h2>Score</h2>
            <h3 id={styles.x}>X has won 0 games</h3>
            <h3 id={styles.o}>O has won 0 games</h3>
        </>
    )
}