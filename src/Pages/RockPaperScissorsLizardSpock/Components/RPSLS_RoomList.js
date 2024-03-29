import { useState } from 'react'
import io from 'socket.io-client'
import { useEffect } from 'react'
import styles from './RPSLS_RoomList.module.scss'
import RPSLS_MultiPlayer from './RPSLS_MultiPlayer'
import WaitingScreen from '../../../Components/WaitingScreen/WaitingScreen'


export default function RPSLS_RomList({socket, setSocket}){
    const [lobbyName, setLobbyName] = useState('')
    const [games, setGames] = useState(null)
    const [currentGame, setCurrentGame] = useState(null)
    const [startGame, setStartGame] = useState("joinRoom")
    const [player, setPlayer] = useState(null)
    const [roundResult, setRoundResult] = useState(null)

    const createRoom = (lobbyName) => {
        socket.emit('createRoom', lobbyName)
        setPlayer("1")
    }

    const handleClick = (evt) => {
        createRoom(lobbyName)
        setStartGame("waiting")
    }

    const joinGame = (gameId) => {
        setPlayer("2")
        socket.emit('joinRoom', gameId)
        socket.on('games', (games)=>{
            setGames(games)
        })
        setCurrentGame(gameId)
        setStartGame(true)
    }
    
    useEffect(()=>{
        const newSocket = io()
        newSocket.on('connected', ()=>{
            newSocket.emit('gameSelect', "RPSLS")
        })
        newSocket.on('games', (games)=>{
            setGames(games)
            console.log(games)
        })
        newSocket.on('opponentLeft', ()=>{
            alert("Opponent left the game!")
            window.close()
        })
        newSocket.on('roomCreated', (id)=>{
            setCurrentGame(id)
        })
        setSocket(newSocket)
    },[])

    useEffect(()=>{
        if(currentGame && games){
            const foundGame = games.find(game=>game.id==currentGame)
            if(foundGame.numberOfPlayers==2){
                setStartGame(true)
            }
        }
        {socket?
        socket.on('finishRound', (results)=>{
            setRoundResult(results)
        })
        :console.log(null)
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
                        <div key={game.id}>
                            <h1 className={styles.lobbyName}>Lobby name:{game.name}</h1>
                            <h2 className={styles.playersName}>Players:{game.numberOfPlayers}</h2>
                            {game.numberOfPlayers<2?<button onClick={()=>joinGame(game.id)}>Join game</button>:""}
                        </div>
                    )
                }):
                ""}
            </>:
            startGame == "waiting" ?
            <WaitingScreen />
            :
            <RPSLS_MultiPlayer games={games} setRoundResult={setRoundResult} roundResult={roundResult} socket={socket} currentGame={currentGame} player={player}/>
    )
}