import { useState, useEffect } from "react";
import { getUser } from '../utilities/users-service'
import Home from "../Home/Home";


export default function App(){
    const [user,setUser] = useState(getUser())
    
    return(
        <main className="App">
            {user?
            <>
                <Home/>
            </>:
            ""}
        </main>
    )
}