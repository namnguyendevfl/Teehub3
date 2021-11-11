import React, { useEffect } from "react";
import  useState  from 'react-usestateref'
import "./Layout.css"
import BannerLayout from "../banner/BannerLayout";
import { timer } from "../utils/localStorage/timer";
import Nav from "../nav/Nav";
import MainLayout from "../main/Main";
import ComplementaryLayout from "../complementary/ComplementaryLayout";
import { hideCom, minNtbkCom } from "../utils/localStorage/complementary";
import { chaps, ntbkComStyle, ntbks } from "../utils/localStorage/notebooks";

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

    //notebooks
    const initialHeight = window.innerHeight
    const [ viewHeight, setViewHeight ] = useState(initialHeight - 80)
    const handleResize = () => {
        setViewHeight(() => window.innerHeight - 80)
    }
    window.addEventListener('resize', handleResize)
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
    const initMaxNtbkOptionBox = minNtbkCom.getMin() !== undefined ? minNtbkCom.getMin() : false
    const [ maxNtbkOptionBox , setMaxNtbkOptionBox  ] = useState(initMaxNtbkOptionBox)
    const [ ntbkEdit, setNtbkEdit ] = useState(false)
    const [ navOption, setNavOption ] = useState()
    const style = ntbkComStyle.getStyle() !== undefined ? ntbkComStyle.getStyle() : {color:"black"}
    const [ ntbkStyle, setNtbkStyle ] = useState(style);
    const comStyleNtbk = (() => displayCom ? {position:"fixed"} : {position:"unset"})()
    return(
        <>
        <div className = ""
                style = {{
                    height: "100vh",
                    background : "#e9ecef"
                }}
        >
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
            <main className = "row w-100 m-0 p-0"
                    style = {{
                        background: "#e9ecef",
                        position: "fixed",
                        maxHeight: `${viewHeight}px`,
                        overflow: "auto",
                        top:"80px"
                    }}
            > 
                <div className ="col-2"></div>
                <div className ="col m-0 me-2 p-0"> 
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
                        ntbkEdit = {ntbkEdit}
                        setNtbkEdit = {setNtbkEdit}               
                    />        
                </div>
                {
                displayCom &&
                <div className ="col-3"></div>
                }               
            </main>
            <div className = "complementary col-3 p-0" style = {comStyleNtbk}>
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
                        ntbkEdit = {ntbkEdit}
                        setNtbkEdit = {setNtbkEdit}
                        ntbkStyle = { ntbkStyle }
                        setNtbkStyle = { setNtbkStyle } 
                        maxNtbkOptionBox = {maxNtbkOptionBox}
                        setMaxNtbkOptionBox = {setMaxNtbkOptionBox}
                />     
            </div>                  
        </div>
         {/* <div className = "popup">
            practice box
        </div> */}
        </>
    )
}