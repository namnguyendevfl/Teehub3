import "./ComplementaryLayout.css"
import React, { useState } from "react";
import { ntbkComStyle } from "../utils/localStorage/notebooks";
import Notebooks from "./Notebooks";
import { navOptions } from "../utils/localStorage/navOptions";

export default function ComplementaryLayout(props) {
    const {
        ntbkSelected,
        setNtbkSelected, 
        ntbkAlteredCount,
        setNtbkAlteredCount,
        chapSelected, 
        setChapSelected, 
        chapAlteredCount,
        setChapAlteredCount,
        topicAlteredCount,
        setTopicAlteredCount,
        displayNav, 
        setDisplayNav, 
        displayCom, 
        setDisplayCom, 
        navOption,
        setNavOption,
        ntbkExpand,
        setNtbkExpand
    } = props 
    const navOptionToDisplay = navOption ? navOption : navOptions.getNav();
    const style = ntbkComStyle.getStyle() !== undefined ? ntbkComStyle.getStyle() : {color:"black"}
    const [ ntbkStyle, setNtbkStyle ] = useState(style);
    const [ ntbkTextStyle, setNtbkTextStyle ] = useState();
    return (
    <>  
        <>
            {
            (navOptionToDisplay === "Notebooks") &&
            <>
            <div className = "notebooks me-2" style = {ntbkStyle}>
                <Notebooks 
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
                    // ntbkExpand = {rExpand}
                    ntbkExpand = {ntbkExpand}
                    setNtbkExpand = {setNtbkExpand}
                    navOption = {navOptionToDisplay}
                    setNavOption = {setNavOption}     
                    ntbkStyle = { ntbkStyle }
                    setNtbkStyle = { setNtbkStyle }
                    ntbkTextStyle = { ntbkTextStyle}
                    setNtbkTextStyle = {setNtbkTextStyle}        
                />
            </div>   
            <div className = "offsetNtbk" ></div>
            </>
            }  
            {displayCom &&        
            <div>
            Speaking to Fox News, a parent in California who has witnessed the impact of masking school children, said: "Parents have been begging for the same consideration that teacher union and education leaders extended to themselves; for their kids to be able to hear their classmates. Randi is at higher risk of severe covid as a vaccinated senior than my unvaccinated young children."

            "Their soft voices have been muffled for nearly two years and we are one of the few countries masking toddlers and grade school children," the parent added. "It’s not lost on me that this severe obligation on kids would not exist if it weren’t for Ms. Weingarten and the other corrupt leaders that run our public education system."
            </div>
            }  
        </>
        {/* } */}
       
    </>
    )

}