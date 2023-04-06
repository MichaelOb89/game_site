import styles from "../TicTacToe.module.scss"


export default function Square({squareNumber, style, turn, setTurn, board, setBoard, player, socket, currentGame}){
    const handleClick = (evt) =>{
        if(turn && player == "X"){
            if(evt.target.textContent!=""){
                alert("Square already selected")
            }else{
            setBoard(board.map((square, index) => 
                index == squareNumber-1 ? "X" : square
            ))
            setTurn(!turn)
            {socket?
                socket.emit("move", {
                        board: board.map((square, index) => 
                        index == squareNumber-1 ? "X" : square
                        ),
                        game: currentGame
                    })
                :console.log("no socket")}
            }
        }else if(!turn && player == "O"){
            if(evt.target.textContent!=""){
                alert("Square already selected")
            }else{
            setBoard(board.map((square, index) => 
            index == squareNumber-1 ? "O" : square
            ))
            setTurn(!turn)
            {socket?
                socket.emit("move", {
                    board: board.map((square, index) => 
                index == squareNumber-1 ? "O" : square
                ),
                game: currentGame
            })
                :console.log("no socket")}
            }
        }
    }
    return(
        <div onClick={handleClick} className={styles.square} id={style}>{board[squareNumber-1]}</div>
    )
}