import styles from "../TicTacToe.module.scss"


export default function Square({squareNumber, style, turn, setTurn, board, setBoard}){
    const handleClick = (evt) =>{
        if(turn){
            if(evt.target.textContent!=""){
                alert("Square already selected")
            }else{
            setBoard(board.map((square, index) => 
                index == squareNumber-1 ? "X" : square
            ))
            setTurn(!turn)
            }
        }else{
            if(evt.target.textContent!=""){
                alert("Square already selected")
            }else{
            setBoard(board.map((square, index) => 
            index == squareNumber-1 ? "O" : square
            ))
            setTurn(!turn)
            }
        }
    }
    return(
        <div onClick={handleClick} className={styles.square} id={style}>{board[squareNumber-1]}</div>
    )
}