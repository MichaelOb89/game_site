import { logOut } from "../../utilities/users-service"
import { Link } from "react-router-dom"

export default function Home({setUser}){
    function handleLogOut(){
        logOut()
        setUser(null)
    }

    return(
        <>
            <h1>Home Page</h1>
            <button onClick={handleLogOut}>Log out</button>
            <Link to={`/tictactoe`}>TicTacToe</Link>
        </>
    )
}