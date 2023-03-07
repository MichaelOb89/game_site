import { useState } from 'react'
import io from 'socket.io-client'
import TicTacToe from '../TicTacToe/TicTacToe'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function RomList(){
    const [lobbyName, setLobbyName] = useState('')
    const [socket, setSocket] = useState(null)
    const [games, setGames] = useState(null)
    
    const createRoom = (lobbyName) => {
        socket.emit('createRoom', lobbyName)
    }
    
    useEffect(()=>{
        const newSocket = io()
        newSocket.on('games', (games)=>{
            setGames(games)
        })
        setSocket(newSocket)
    },[])

    return(
        <>
            <input placeholder='Lobby Name' onChange={(evt)=>setLobbyName(evt.target.value)}/>
            <Link to={`/tictactoe/${lobbyName}`}><button onClick={()=>createRoom(lobbyName)}>Create Lobby</button></Link>
        </>
    )
}