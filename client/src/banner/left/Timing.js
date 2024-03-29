import React, { useRef, useEffect } from "react";
import { duration } from "../../utils/duration/duration";
import { leftBanner } from "../../utils/icons/banner/leftBanner";
import { timer } from "../../utils/localStorage/timer";

export default function Timing(props) {
    const { 
        isTimerRunning, 
        setIsTimerRunning,  
        setSession,
        focusInterval, 
        breakInterval,
        session 
    } = props;

  //Step 1: Set interval to run the callback function every second  
  // function useInterval (nextTick, delay) {
  const useInterval = (nextTick, delay) => {
    const savedNextTick = useRef()
    //Then set up the interval
    useEffect (() => {
      //Remember the lastest callback
      savedNextTick.current = nextTick
      if (delay !== null){
        //Note: We should use a callback function we passing it into setInterval
        let id = setInterval(() => savedNextTick.current(),delay)
        return () => clearInterval(id)
      }
    },[delay, nextTick])
  }
  

  //Step 2: Step up nextTick function with a parameter "preState"

  const nextTick = (prevState) => {
    // const timeRemaining = Math.max(0,prevState.timeRemaining - 1)
    const timeElapsed = Math.min(prevState.interval*60,prevState.timeElapsed + 1)
    const timeElapsedPercent = timeElapsed/(prevState.interval*60)*100
    const session = {
        ...prevState,
        timeElapsed,
        timeElapsedPercent
    }
    timer.saveSession(session)
    return session
  }  
  
  //Step 3: Define the nextSession as either focusing or on break by stating function to transition the current session type to the next session
  //Fixing a bug which does not memorize the interval of focusing and on break
  const nextSession = (focusInterval, breakInterval) => {
    return (currentSession) => 
      (currentSession.label === "Focusing")
      ?   { label: "On Break",
            interval: breakInterval,
            timeElapsed:0,
            timeElapsedPercent:0,
            numSession: currentSession.numSession
          }
      :   { label: "Focusing",
            interval: focusInterval,
            timeElapsed:0,
            timeElapsedPercent:0,
            numSession: currentSession.numSession + 1
          }
    }
  //Step5: call the useInterval function: if play (istimerRunning): delay 1s, and run the call back function to set state of session with label and timeremining decrementing by 1
    useInterval(() => {
      // if (session.timeRemaining === 0) {
      if (session.timeElapsedPercent === 100) {
        console.log("voice")
        return setSession(nextSession(focusInterval, breakInterval))
      }
      return setSession(nextTick)
    }, 
    isTimerRunning ? 1000 : null
    )
    const handleClick = () => setIsTimerRunning(()=> !isTimerRunning)   
    const secsToMins = duration.secToMin(session?.timeElapsed)
    const handleStop = (event) => { 
        event.preventDefault();
        setIsTimerRunning(() => false);
        setSession(()=>null);
        timer.dltSession();
        timer.dltBreak();
        timer.dltFocus();
        timer.saveSetTimer(false) 
    }
        
    return (
    <ul className = "nav">
    <li className = "nav-item me-3">  
        <button className = "button"> logo
        </button>
    </li>
    <li className = "nav-item me-3">           
        <div className="toolTip d-flex justify-content-center align-items-center border-white">
                <form 
                >
                <button className = "button p-0"
                    id = "home"
                    type = "submit"
                    onClick = {handleStop}
                    >
                    {leftBanner.home()}
                    {/* <Home /> */}
                </button>
                </form>
                <span className = "tooltiptext"> Home </span>
        </div>
    </li>
    {
    isTimerRunning
    ?   <>
        <li className = "nav-item me-3">
            <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                <div >
                {leftBanner.playFilled()}
                </div>
            <div className = 'barFilled'> </div>
            </div>
        </li>
        <li className = "nav-item me-3">
            <div className="toolTip d-flex justify-content-center align-items-center border-white">
                <button className = "button p-0"
                    id = "home"
                    onClick = {handleClick}
                    > 
                    {leftBanner.pause()}
                </button>
                <span className = "tooltiptext"> Pause </span>
            </div>
        </li>
        <li className = "nav-item d-flex">
            <div className ="d-flex align-items-center justify-content-center timerTitle">
                    <span className = "d-flex align-items-center justify-content-center px-1" style = {{color:"#0d6efd"}}> 
                    <b className = "ms-2">{session?.label} {secsToMins} </b> 
                    </span>
            </div>
        </li>
        </>
    :   <>
        <li className = "nav-item me-3">

        <div className="toolTip d-flex justify-content-center align-items-center border-white">
            <button className = "button p-0"
                id = "home"
                onClick = {handleClick}
                > 
                {leftBanner.play()}
            </button>
                <span className = "tooltiptext"> Play </span>
            </div>
        </li>
        <li className = "nav-item me-3">
            <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                <div >
                {leftBanner.pauseFilled()}
                </div>
                <div className = 'pauseBarFilled'> </div>
            </div>
        </li>
        <li className = "nav-item d-flex">
            <div className ="d-flex align-items-center justify-content-center timerTitle">
                    <span className = "d-flex align-items-center justify-content-center px-1" style = {{color:"#d00000"}}> 
                    <b className = "ms-2">{session?.label} {secsToMins} </b> 
                    </span>
            </div>
        </li>
    </>
    }
</ul>
    )
}