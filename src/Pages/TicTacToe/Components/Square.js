import styles from "../TicTacToe.module.scss"
import { useState } from "react"

export default function Square({squareNumber, style, turn, setTurn, board, setBoard}){
    const [squareValue, setSquareValue] = useState("")
    const handleClick = (evt) =>{
        setBoard(board.map((square, index) => 
            index == squareNumber-1 ? "X" : square
        ))
    }
    return(
        <div onClick={handleClick} className={styles.square} id={style}>{board[squareNumber-1]}</div>
    )
}