import React from "react";
import { timer } from "../../utils/localStorage/timer";
import NonTiming from "./NonTiming";
import Timing from "./Timing";

export default function LeftBanner(props) {
    const { 
        isTimerRunning, 
        setIsTimerRunning,  
        session, 
        setSession,
        focusInterval, 
        setFocusInterval,
        setBreakInterval,
        breakInterval,  
    } = props;
    return(
        timer.getSetTimer()
            ? <Timing
                isTimerRunning = {isTimerRunning} 
                setIsTimerRunning = {setIsTimerRunning}
                focusInterval = {focusInterval} 
                setFocusInterval={setFocusInterval}
                breakInterval = {breakInterval} 
                setBreakInterval={setBreakInterval}
                session = {session} 
                setSession = {setSession}  
            />
            :  <NonTiming 
                isTimerRunning = {isTimerRunning} 
                setIsTimerRunning = {setIsTimerRunning}
                focusInterval = {focusInterval} 
                setFocusInterval={setFocusInterval}
                breakInterval = {breakInterval} 
                setBreakInterval={setBreakInterval}
                session = {session} 
                setSession = {setSession}  
            />
    )
}