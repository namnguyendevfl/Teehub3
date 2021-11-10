import React from "react";
import { leftBanner } from "../../utils/icons/banner/leftBanner";
import { timer } from "../../utils/localStorage/timer";

export default function TimerToolTip (props) {
    const { setIsTimerRunning,
            setSession,
            focusInterval, 
            setFocusInterval,
            breakInterval, 
            setBreakInterval,
          } = props
    const handleFocus = ({target}) => setFocusInterval(() => target.value)
    const handleBreak = ({target}) => setBreakInterval(() => target.value)    
    const handleClick = () => {
        timer.saveFocus(focusInterval);
        timer.saveBreak(breakInterval);
        //Switch the "pause" state variable when the playPause button is clicked 
        setIsTimerRunning((prevState) => {
          timer.saveSetTimer(true)
          const nextState = !prevState;
          if (nextState) {            
            setSession((prevStateSession) => {
              if (prevStateSession === null) {
                const initialSession = {
                  label: "Focusing",
                  interval: focusInterval,
                  timeElapsed: 0,
                  process:0,
                  numSession: 1
                };
                timer.saveSession(initialSession)
                return initialSession
              }
              return prevStateSession;
            });        
          }
          return nextState;
        });
      }
    return (
      <div  className = "toolTip"
            id = "timerToolTip"
      >
        <div  
              className = "flex-nowrap d-flex toolTipBar timerToolTipBar"          
            >
          <form
                className ="d-flex justify-content-center align-items-center "
                onSubmit = {handleClick}
                >
            <input  id = "focusInterval"
                    type ="text"
                    name = "focusInterval"
                    className ="durationInput" 
                    placeholder = "Focus"
                    onChange = {handleFocus}
            ></input>
            <input  id = "breakInterval"
                    type ="text"
                    name = "breakInterval"
                    className ="durationInput"
                    placeholder = "Break"
                    onChange = {handleBreak}
            ></input>  
            <button type = "submit"
                    id = "timerSubmitBtn"
                    className =" forwardBtn d-flex align-items-center justify-content-center"
                    onClick ={handleClick}    
                    >
            {leftBanner.forwardArrowWhite()}
            </button>
          </form>

        </div>        
      </div>
    )
}