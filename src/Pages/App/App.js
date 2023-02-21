import { useState, useEffect } from "react";
import { getUser } from '../../utilities/users-service'
import Home from "../Home/Home";
import AuthPage from "../AuthPage/AuthPage";

export default function App(){
    const [user,setUser] = useState(getUser())
    
    return(
        <main className="App">
            {user?
            <>
                <Home setUser={setUser}/>
            </>:
            <AuthPage setUser={setUser}/>}
        </main>
    )
}