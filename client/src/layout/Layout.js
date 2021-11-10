import React, { useEffect } from "react";
import  useState  from 'react-usestateref'
import "./Layout.css"
import BannerLayout from "../banner/BannerLayout";
import { timer } from "../utils/localStorage/timer";
import Nav from "../nav/Nav";
import MainLayout from "../main/Main";
import ComplementaryLayout from "../complementary/ComplementaryLayout";
import { hideCom, minNtbkCom } from "../utils/localStorage/complementary";
import { chaps, ntbks } from "../utils/localStorage/notebooks";

export default function Layout() {
     //First part: Running Pomodoro
    const [isTimerRunning, setIsTimerRunning] = useState(false)
    const [session, setSession] = useState(null)
    const [focusInterval, setFocusInterval] = useState("")
    const [breakInterval, setBreakInterval] = useState("")

    useEffect (() => {
        //First part: pomodoro
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

    //Notebooks
    const [ ntbkAlteredCount, setNtbkAlteredCount ] = useState(0);
    const [ chapAlteredCount, setChapAlteredCount ] = useState(0);
    const [ topicAlteredCount, setTopicAlteredCount ] = useState(0);
    const initialNtbkSelected = ntbks.getNtbkSelected() ? ntbks.getNtbkSelected() : null
    const [ ntbkSelected, setNtbkSelected ] = useState(initialNtbkSelected);
    const initialChapSelected = chaps.getChapSelected() ? chaps.getChapSelected() : null
    const [ chapSelected, setChapSelected ] = useState(initialChapSelected);
    const [ displayNav, setDisplayNav ] = useState(true);
    const initialDisplayCom = hideCom.getHideCom() !== undefined ? hideCom.getHideCom() : true
    const [ displayCom, setDisplayCom ] = useState(initialDisplayCom);
    const initialNtBkExpand = minNtbkCom.getMin() !== undefined ? minNtbkCom.getMin() : false 
    const [ ntbkExpand, setNtbkExpand ] = useState(initialNtBkExpand);
    const [ navOption, setNavOption ] = useState()

    return(
        <>
        <div className = "">
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
            {/* <div className = "ntbkMore">
                <NtbkMore />
            </div> */}
            <header className = "navigation col-2 pe-1"                
                >
                    <Nav 
                        ntbkSelected = {ntbkSelected}
                        setNtbkSelected = {setNtbkSelected}
                        chapSelected = {chapSelected}
                        setChapSelected = {setChapSelected}
                        displayNav = {displayNav}
                        setDisplayNav = {setDisplayNav}
                        displayCom = {displayCom}
                        setDisplayCom = {setDisplayCom}
                        navOption = {navOption}
                        setNavOption = {setNavOption}             
                    />
            </header>
            <div className ="main row w-100 mx-1 m-0 p-0"
                >
                <div className ="col-2"></div>
                <main className = "col m-0 w-100 px-2"> 
                    <MainLayout 
                        ntbkSelected = {ntbkSelected}
                        setNtbkSelected = {setNtbkSelected}
                        ntbkAlteredCount = {ntbkAlteredCount} 
                        setNtbkAlteredCount = {setNtbkAlteredCount}    
                        chapSelected = {chapSelected}
                        setChapSelected = {setChapSelected}
                        chapAlteredCount = {chapAlteredCount}
                        setChapAlteredCount = {setChapAlteredCount}
                        topicAlteredCount = {topicAlteredCount}
                        setTopicAlteredCount = {setTopicAlteredCount}
                        displayNav = {displayNav}
                        setDisplayNav = {setDisplayNav}
                        displayCom = {displayCom}
                        setDisplayCom = {setDisplayCom}
                        ntbkExpand = {ntbkExpand}
                        setNtbkExpand = {setNtbkExpand}              
                    />             
                </main>
                {
                    displayCom &&
                    <div className ="col-3"></div>
                }
            </div>
            <div className = "complementary col-3 p-0">
                <ComplementaryLayout 
                        ntbkSelected = {ntbkSelected}
                        setNtbkSelected = {setNtbkSelected}
                        ntbkAlteredCount = {ntbkAlteredCount} 
                        setNtbkAlteredCount = {setNtbkAlteredCount}  
                        chapSelected = {chapSelected}
                        setChapSelected = {setChapSelected}
                        chapAlteredCount = {chapAlteredCount}
                        setChapAlteredCount = {setChapAlteredCount}
                        topicAlteredCount = {topicAlteredCount}
                        setTopicAlteredCount = {setTopicAlteredCount}
                        displayNav = {displayNav}
                        setDisplayNav = {setDisplayNav}
                        displayCom = {displayCom}
                        setDisplayCom = {setDisplayCom}
                        navOption = {navOption}
                        setNavOption = {setNavOption} 
                        ntbkExpand = {ntbkExpand}
                        setNtbkExpand = {setNtbkExpand}                  
                />     
            </div>                  
        </div>
         {/* <div className = "popup">
            practice box
        </div> */}
        </>
    )
}