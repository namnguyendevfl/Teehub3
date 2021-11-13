import React, { useEffect } from "react";
import  useState  from 'react-usestateref'
import "./Layout.css"
import BannerLayout from "../banner/BannerLayout";
import { timer } from "../utils/localStorage/timer";
import Nav from "../nav/Nav";
import MainLayout from "../main/Main";
import ComplementaryLayout from "../complementary/ComplementaryLayout";
import { hideCom, minNtbkCom } from "../utils/localStorage/complementary";
import { chaps, ntbkCom, ntbks } from "../utils/localStorage/notebooks";
import { navOptions } from "../utils/localStorage/navOptions";


export default function SignedIn(props) {
    const {
        userLogedIn, 
        setFound, 
        setUserLogedIn,
        userId,
        found    
    } = props

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
    const [ ntbkAlteredCount, setNtbkAlteredCount ] = useState(0);
    const [ chapAlteredCount, setChapAlteredCount ] = useState(0);
    const [ topicAlteredCount, setTopicAlteredCount ] = useState(0);
    const initialNtbkSelected = ntbks.getNtbkSelected() ? ntbks.getNtbkSelected() : null
    const [ ntbkSelected, setNtbkSelected ] = useState(initialNtbkSelected);
    const initialChapSelected = chaps.getChapSelected() ? chaps.getChapSelected() : null
    const [ chapSelected, setChapSelected ] = useState(initialChapSelected);
    const [ displayNav, setDisplayNav ] = useState(true);
    const initialDisplayCom = (() => {
        if (chapSelected) {
            if (hideCom.getHideCom() !== undefined) return hideCom.getHideCom()
            return true
        }
        return true
    })()
    const [ displayCom, setDisplayCom ] = useState(initialDisplayCom);
    const initMaxNtbkOptnBox = (() => {
        if (chapSelected && displayCom === false) return false
        if (displayCom || chapSelected) return true
    })()
    const [ maxNtbkOptnBox, setMaxNtbkOptnBox  ] = useState(initMaxNtbkOptnBox)
    useEffect(() => {
        setDisplayCom(() => initialDisplayCom)
        setMaxNtbkOptnBox(() => initMaxNtbkOptnBox)
    },[chapSelected, displayCom])

    const [ ntbkEdit, setNtbkEdit ] = useState(false);
    const initNavOption = navOptions.getNav() ? navOptions.getNav() : null
    const [ navOption, setNavOption ] = useState(initNavOption);
    const style = ntbkCom.getStyle() !== undefined ? ntbkCom.getStyle() : {color:"black"}
    const [ ntbkComStyle, setNtbkComStyle ] = useState(style);
    const comStyleNtbk = (() => displayCom ? {position:"fixed"} : {position:"unset"})()
    const mainStyle = (() => {
        if (navOption === "Notebooks") {
            if (ntbkEdit) return {
                top:"77px",
            } 
        }
        return {
            top:"80px",            
        }
    })()


    return( userId || found &&
        <>
         {/* This is the non-popup part*/}
        <div className = ""
                style = {{
                    height: "100vh",
                    background : "#e9ecef",
                }}
        >
            {/* This is the banner part*/}
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
            {/* This is the header part*/}   
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
            {/* This is the main part*/}
            <main className = "main row w-100 m-0 p-0" 
                style = {mainStyle}
            > 
                <div className ="col-2"></div>
                <div className ="col ms-1 me-1 p-0"
                > 
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
                         navOption = {navOption}
                         setNavOption = {setNavOption} 
                         ntbkEdit = {ntbkEdit}
                         setNtbkEdit = {setNtbkEdit}
                         ntbkStyle = { ntbkComStyle}
                         setNtbkStyle = { setNtbkComStyle } 
                         maxNtbkOptionBox = {maxNtbkOptnBox}
                         setMaxNtbkOptionBox = {setMaxNtbkOptnBox}        
                    />        
                </div>
                {
                displayCom &&
                <div className ="col-3"></div>
                }               
            </main>

            {/* This is the complementary part*/}
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
                        ntbkStyle = { ntbkComStyle}
                        setNtbkStyle = { setNtbkComStyle } 
                        maxNtbkOptionBox = {maxNtbkOptnBox}
                        setMaxNtbkOptionBox = {setMaxNtbkOptnBox}
                />     
            </div>                  
        </div>
        </>
    )
}