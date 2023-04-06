import { useState } from 'react'
import io from 'socket.io-client'
import TicTacToe from '../TicTacToe/TicTacToe'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import styles from '../RomList/RomList.module.scss'

import WaitingScreen from '../../Components/WaitingScreen/WaitingScreen'


export default function RomList({socket, setSocket}){
    const [lobbyName, setLobbyName] = useState('')
    const [games, setGames] = useState(null)
    const [currentGame, setCurrentGame] = useState(null)
    const [startGame, setStartGame] = useState("joinRoom")
    const [player, setPlayer] = useState(null)
    
    const createRoom = (lobbyName) => {
        socket.emit('createRoom', lobbyName)
        setPlayer("X")
        setCurrentGame(lobbyName)
    }

    const handleClick = (evt) => {
        createRoom(lobbyName)
        setStartGame("waiting")
    }

    const joinGame = (gameName) => {
        setPlayer("O")
        socket.emit('joinRoom', gameName)
        socket.on('games', (games)=>{
            setGames(games)
        })
        setCurrentGame(gameName)
        setStartGame(true)
    }
    
    useEffect(()=>{
        const newSocket = io()
        newSocket.on('games', (games)=>{
            setGames(games)
        })
        newSocket.on('games', (games)=>{
            setGames(games)
        })
        console.log(games)
        setSocket(newSocket)
    },[])

    useEffect(()=>{
        if(currentGame && games){
            const foundGame = games.find(game=>game.game==currentGame)
            if(foundGame.numberOfPlayers==2){
                setStartGame(true)
            }
        }
    }, [games])

    return(
        startGame == "joinRoom" ?
            <>    
                <input placeholder='Lobby Name' onChange={(evt)=>setLobbyName(evt.target.value)}/>
                <button className={styles.createLobby} onClick={handleClick}>Create Lobby</button>
                {games? 
                games.map(game=>{
                    return(
                        <div>
                            <h1 className={styles.lobbyName}>Lobby name:{game.game}</h1>
                            <h2 className={styles.playersName}>Players:{game.numberOfPlayers}</h2>
                            {game.numberOfPlayers<2?<button onClick={()=>joinGame(game.game)}>Join game</button>:""}
                        </div>
                    )
                }):
                ""}
            </>:
            startGame == "waiting" ?
            <WaitingScreen />
            // <span className={styles.loadingScreen}>
            //     <h1 className={styles.waitingForOpp}>Waiting For Opponent</h1>
            // </span>
            :
            <TicTacToe socket={socket} currentGame={currentGame} player={player}/>
    )
}