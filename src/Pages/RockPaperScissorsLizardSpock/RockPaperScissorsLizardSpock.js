import { useEffect, useState } from 'react';
import RPSLS_SinglePlayer from './Components/RPSLS_SinglePlayer';
import RPSLS_MultiPlayer from './Components/RPSLS_MultiPlayer';
import styles from '../RockPaperScissorsLizardSpock/RockPaperScissorsLizardSpock.module.scss';

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
          <RPSLS_SinglePlayer/>:<RPSLS_MultiPlayer socket={socket} setSocket={setSocket}/>}
        </>
      );

};