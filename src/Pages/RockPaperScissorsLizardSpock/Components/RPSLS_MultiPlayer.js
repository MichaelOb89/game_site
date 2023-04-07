import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import styles from '../RockPaperScissorsLizardSpock.module.scss'


export default function RPSLS_MultiPlayer(){
    useEffect(()=>{
        const newSocket = io()
        newSocket.on()
    },[])

    return(
        <></>
    )
}