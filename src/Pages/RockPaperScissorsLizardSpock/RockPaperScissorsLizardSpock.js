import { useEffect, useState } from 'react';
import RPSLS_SinglePlayer from './Components/RPSLS_SinglePlayer';
import RPSLS_RomList from './Components/RPSLS_RoomList';


export default function RockPaperScissorsLizardSpock({socket, setSocket}){
    const [multiplayer, setMultiplayer] = useState('none')

      return (
        <>
          
          {multiplayer=='none'?
          <>
            <h1>Select mode</h1>
            <button onClick={()=>setMultiplayer('single')}>Single Player</button><button onClick={()=>setMultiplayer('multiplayer')}>Multiplayer</button>
          </>:
          multiplayer=='single'?
          <RPSLS_SinglePlayer/>:<RPSLS_RomList socket={socket} setSocket={setSocket}/>}
        </>
      );

};