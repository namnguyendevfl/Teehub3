import React,{useState} from "react";
import { leftBanner } from "../../utils/icons/banner/leftBanner";
import TimerToolTip from "./TimerTooltip";

export default function NonTiming (props) {
    const { 
        setIsTimerRunning,
        setSession,
        focusInterval, 
        setFocusInterval,
        setBreakInterval,
        breakInterval, 
    } = props
    const [btnId, setBtnId] = useState ("home")
    const [toolTipDisplay, setToolTipDisplay] = useState (false)
    const handleBtnClick = ({target}) => {
        const targetId= target.id
        setBtnId(() => targetId)
        if (targetId==="timer" ) setToolTipDisplay(() => !toolTipDisplay)
        else setToolTipDisplay(() => false)
    }

    window.addEventListener("click",({target}) => {
        const targetId= target.id
        if (targetId === "focusInterval" || targetId === "breakInterval") return setToolTipDisplay(() => true)
        if ((targetId !== "timer" && targetId !== "timerToolTip") && (toolTipDisplay))
        return setToolTipDisplay(() => false)
    })  
    return <ul className = "nav ">
        <li className = "nav-item me-3">  
            <button className = "button "> logo
            </button>
        </li>
        <li className = "nav-item me-3">
            {btnId === "home"
            ? <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                    <button className = "button d-flex justify-content-center align-items-center border-white"
                            id = "home"
                            onClick = {handleBtnClick}
                        >
                    {leftBanner.homeFilled()}
                    </button>
                    <div className = 'barFilled'> </div>
                </div>            
                    
            : <div className="toolTip d-flex justify-content-center align-items-center border-white">
                    <button className = "button d-flex justify-content-center align-items-center border-white"
                        id = "home"
                        onClick = {handleBtnClick}
                        > 
                    {leftBanner.home()}
                    </button>
                    <span className = "tooltiptext" > Home </span>
                </div>
            }
        </li>
        <li className = "nav-item me-3">
            {btnId === "focus" 
                ? <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                        <div >
                        <button className = "button d-flex justify-content-center align-items-center border-white"
                            onClick = {handleBtnClick}
                            id = "focus" >
                            {leftBanner.dotCircleFilled()}
                        </button>
                        </div>
                        <div className = 'barFilled'> </div>
                    </div>
                : <div className="toolTip d-flex justify-content-center align-items-center border-white">
                        <button className = "button d-flex justify-content-center align-items-center border-white"
                            onClick = {handleBtnClick}
                            id = "focus"
                            > 
                            {leftBanner.dotCircle()}
                        </button>
                        <span className = "tooltiptext" > Projects </span>
                    </div>
            }

        </li>
        <li className = "nav-item me-3">
            {btnId === "social"
            ? <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                    <div> 
                        <button className = " button d-flex justify-content-center align-items-center border-white"
                                onClick = {handleBtnClick}
                                id = "social"
                        > 
                        {leftBanner.coffeeFilled()}
                        </button>
                        </div>
                    <div className = 'barFilled'> </div>
                </div>
            
            : <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                    <button className = " button d-flex justify-content-center align-items-center border-white"
                        onClick = {handleBtnClick}
                        id = "social"
                        > 
                        {leftBanner.coffee()}
                    </button>
                    <span className = "tooltiptext" > Social </span>
                </div>
            } 
        </li>
        <li className = "nav-item me-3">
        {btnId === "journal"
            ? <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                    <div 
                    > 
                    <button className = " button d-flex justify-content-center align-items-center border-white"
                        onClick = {handleBtnClick}
                        id = "journal"     
                        > 
                        {leftBanner.journalFilled()}
                    </button></div>
                    <div className = 'barFilled'> </div>
                </div>
            
            : <div className="toolTip button d-flex justify-content-center align-items-center border-white">
                    <button className = " button d-flex justify-content-center align-items-center border-white"
                        onClick = {handleBtnClick}
                        id = "journal"
                        > 
                        {leftBanner.journal()}
                    </button>
                    <span className = "tooltiptext" > Writings </span>
                </div>
            } 

        </li> 
        <li className = "nav-item ">
            <div className="toolTip button d-flex justify-content-center align-items-center border-white">
            <button  className = "button d-flex justify-content-center align-items-center border-white"
                        id = "timer"
                        onClick = {handleBtnClick}
                        >
                    {leftBanner.timer()}
            </button>
                <div > </div>
            </div>
                {
                toolTipDisplay 
                ? <TimerToolTip
                    setIsTimerRunning = {setIsTimerRunning}
                    focusInterval = {focusInterval} 
                    breakInterval = {breakInterval} 
                    setFocusInterval={setFocusInterval}
                    setBreakInterval={setBreakInterval}
                    setSession = {setSession}      
                />
                : null
                }     
        </li>
    </ul>
}