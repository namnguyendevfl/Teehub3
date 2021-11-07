import React from "react";
import "./BannerLayout.css";
import LeftBanner from "./left/LeftBanner";
import ProgressBar from "./progressBar/ProgressBar";
import RightBanner from "./right/RightBanner";
import SearchBox from "./search/Search";

export default function BannerLayout(props) {
    const { 
        isTimerRunning, 
        setIsTimerRunning,  
        session, 
        setSession,
        focusInterval, 
        setFocusInterval,
        setBreakInterval,
        breakInterval,  
    } = props

    return (
        <>
        <div className ="row w-100 p-1 d-flex align-items-center justify-content-start flex-nowrap headerBar" >
            <div className =" col leftBar ms-3 me-md-3 me-2 d-flex flex-nowrap justify-content-start m-0 p-0">
                <LeftBanner    
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
            <div className = " col">
                <SearchBox />
            </div>
            <div className =" col d-flex flex-nowrap justify-content-end ms-md-3 p-0 me-3 rightBar">
                <RightBanner />
            </div>
        </div>
        <div>
            <ProgressBar  isTimerRunning = {isTimerRunning} session = {session}  
                                   />
        </div>
        </>
    )
}