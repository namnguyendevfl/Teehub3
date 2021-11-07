import React, { useEffect, useState } from "react";
import "./Layout.css"
import BannerLayout from "../banner/BannerLayout";
import { timer } from "../utils/data/timer";
import Nav from "../nav/Nav";
import MainLayout from "../main/Main";
import ComplementaryLayout from "../complementary/ComplementaryLayout";

export default function Layout() {
     //First part: Running Pomodoro
    const [isTimerRunning, setIsTimerRunning] = useState(false)
    const [session, setSession] = useState(null)
    const [focusInterval, setFocusInterval] = useState("")
    const [breakInterval, setBreakInterval] = useState("")
    useEffect (() => {
        setBreakInterval(() => timer.getBreak())
        setFocusInterval (() => timer.getFocus())
        if (timer.getSetTimer() && session === null) {
             setSession (() => timer.getSession())      
        } else {
             setSession (() => session);
        }
    }, [session])
    const   [lock, setLock] = useState(true)
    const   [password, setPassword] = useState ("hello")
    useEffect (() => setLock(() => lock),[lock])
    //Main 
    const [ ntBkSelected, setNtBkSelected ] = useState()
    const [ chapSelected, setChapSelected ] = useState ()
    const [ displayNav, setDisplayNav ] = useState(true)
    const [ displayCom, setDisplayCom ] = useState(true)
    return(
        <>
        <div className = "background">
            <div className = "banner">
                <BannerLayout 
                    isTimerRunning = {isTimerRunning} 
                    setIsTimerRunning = {setIsTimerRunning}
                    focusInterval = {focusInterval} 
                    setFocusInterval={setFocusInterval}
                    breakInterval = {breakInterval} 
                    setBreakInterval={setBreakInterval}
                    session = {session} 
                    setSession = {setSession}   
                />
            </div>
            <header className = "navigation col-2"                
                >
                    <Nav />
            </header>
            <div className ="container-fluid row m-0 p-0"
                >
                <div className ="col-2"></div>
                <main className = "col"> 
                    <MainLayout 
                        ntBkSelected = {ntBkSelected}
                        setNtBkSelected = {setNtBkSelected}
                        chapSelected = {chapSelected}
                        setChapSelected = {setChapSelected}
                        displayNav = {displayNav}
                        setDisplayNav = {setDisplayNav}
                        displayCom = {displayCom}
                        setDisplayCom = {setDisplayCom}                    
                    />             
                </main>
                <div className ="col-3"></div>
            </div>
            <div className = "complementary col-3 border border-primary">
                        {/* <Complementary /> */}
                <ComplementaryLayout 
                    ntBkSelected = {ntBkSelected}
                    setNtBkSelected = {setNtBkSelected}
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    displayNav = {displayNav}
                    setDisplayNav = {setDisplayNav}
                    displayCom = {displayCom}
                    setDisplayCom = {setDisplayCom}                
                />
            </div>
        </div>
         {/* <div className = "popup">
            practice box
        </div> */}
        </>
    )
}