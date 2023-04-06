import { useState, useEffect } from "react";
import { getUser } from '../../utilities/users-service'
import Home from "../Home/Home";
import AuthPage from "../AuthPage/AuthPage";
import { Route, Routes } from "react-router-dom";
import TicTacToe from "../TicTacToe/TicTacToe";
import RomList from "../RomList/RomList";
import RockPaperScissorsLizardSpock from "../RockPaperScissorsLizardSpock/RockPaperScissorsLizardSpock";
import RockPaperScissors from "../RockPaperScissors/RockPaperScissors";

export default function App(){
    const [user,setUser] = useState(getUser())
    const [socket, setSocket] = useState(null)
    return(
        <main className="App">
            {user?
            <Routes>
                <Route path="/" element={<Home setUser={setUser}/>}/>
                <Route path="/tictactoe" element={<RomList socket={socket} setSocket={setSocket}/>}/>
                <Route path="/tictactoe/:roomId" element={<TicTacToe socket={socket}/>}/>
                <Route path="/rockpaperscissorslizardspock" element={<RockPaperScissorsLizardSpock />}/>
                <Route path="/rockpaperscissors" element={<RockPaperScissors />}/>
            </Routes>:
            <AuthPage setUser={setUser}/>}
        </main>
    )
}