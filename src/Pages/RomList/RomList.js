import { useState } from 'react'
import io from 'socket.io-client'
import TicTacToe from '../TicTacToe/TicTacToe'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function RomList({socket, setSocket}){
    const [lobbyName, setLobbyName] = useState('')
    const [games, setGames] = useState(null)
    const [startGame, setStartGame] = useState("joinRoom")
    const [player, setPlayer] = useState(null)
    
    const createRoom = (lobbyName) => {
        socket.emit('createRoom', lobbyName)
        setPlayer("X")
    }

    const handleClick = (evt) => {
        createRoom(lobbyName)
        setStartGame("waiting")
    }

    const joinGame = (gameName) => {
        setPlayer("O")
        socket.emit('joinRoom', gameName)
    }
    
    useEffect(()=>{
        const newSocket = io()
        newSocket.on('games', (games)=>{
            setGames(games)
        })
        newSocket.on('games', (games)=>{
            console.log(games)
            setGames(games)
        })
        console.log(games)
        setSocket(newSocket)
    },[])

    return(
        startGame == "joinRoom" ?
            <>    
                <input placeholder='Lobby Name' onChange={(evt)=>setLobbyName(evt.target.value)}/>
                <button onClick={handleClick}>Create Lobby</button>
                {games? 
                games.map(game=>{
                    return(
                        <div>
                            <h1>Lobby name:{game.game}</h1>
                            <h2>Players:{game.numberOfPlayers}</h2>
                            {game.numberOfPlayers<2?<button onClick={()=>joinGame(game.game)}>Join game</button>:""}
                        </div>
                    )
                }):
                ""}
            </>:
            startGame == "waiting" ?
            <h1>Waiting For opponent</h1>:
            <TicTacToe player={player}/>
    )
}