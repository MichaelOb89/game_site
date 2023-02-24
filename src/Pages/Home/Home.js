import { logOut } from "../../utilities/users-service"

export default function Home({setUser}){
    function handleLogOut(){
        logOut()
        setUser(null)
    }

    return(
        <>
            <h1>Home Page</h1>
            <button onClick={handleLogOut}>Log out</button>
        </>
    )
}