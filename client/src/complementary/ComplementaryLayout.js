import "./ComplementaryLayout.css"
import React, { useState } from "react";
import { ntbkComStyle } from "../utils/localStorage/notebooks";
import Notebooks from "./Notebooks";
import { navOptions } from "../utils/localStorage/navOptions";
import Edit from "../notebooks/inComplementary/options/options/Edit";

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
        ntbkEdit,
        setNtbkEdit,
        ntbkStyle,
        setNtbkStyle,
        maxNtbkOptionBox,
        setMaxNtbkOptionBox,
    } = props 
    const navOptionToDisplay = navOption ? navOption : navOptions.getNav();
    // const style = ntbkComStyle.getStyle() !== undefined ? ntbkComStyle.getStyle() : {color:"black"}
    // const [ ntbkStyle, setNtbkStyle ] = useState(style);
    const [ ntbkTextStyle, setNtbkTextStyle ] = useState();
    // const ntbkRight = chapSelected ? {right:"22px"} : {right:"9px"}
    const style = (() => {
        if (ntbkEdit) {
            if (displayCom) {
                return {
                    background: "none",
                    // right:"0px",  
                }
            } return {
                background: "none",
                    right:"16px",  
            } 
        }
        if(displayCom) {
            return {
                width: "inherit",
                backgroundColor: "#e9ecef",   
                // right:"0px",     
            }
        }
        if (!displayCom) {
            if (!maxNtbkOptionBox) {
                return {
                    color:"black", 
                    boxShadow:"none", 
                    background:"none", 
                    width:"260px",               
                    right:"16px",         
                }
            } else {
                return {
                    background:"white", 
                    width:"260px",
                    boxShadow: "0px 1px 7px 4px lightgrey",
                    borderRadius:"8px",
                    right:"16px",            
                    }        
            }
        }

    })()
    return (
    <>  
        <>
            {
            (navOptionToDisplay === "Notebooks") &&
            <>
            <div className = "notebooks" style = {style}>
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
                    navOption = {navOptionToDisplay}
                    setNavOption = {setNavOption}     
                    ntbkStyle = { ntbkStyle }
                    setNtbkStyle = { setNtbkStyle }
                    ntbkTextStyle = { ntbkTextStyle}
                    setNtbkTextStyle = {setNtbkTextStyle}
                    ntbkEdit = {ntbkEdit}
                    setNtbkEdit = {setNtbkEdit} 
                    maxOptionBox = {maxNtbkOptionBox}    
                    setMaxOptionBox = {setMaxNtbkOptionBox} 
                />
            </div>   
            <div className = "offsetNtbk" ></div>
            </>
            }  
            {displayCom &&        
            <div className = "comContent">
            Speaking to Fox News, a parent in California who has witnessed the impact of masking school children, said: "Parents have been begging for the same consideration that teacher union and education leaders extended to themselves; for their kids to be able to hear their classmates. Randi is at higher risk of severe covid as a vaccinated senior than my unvaccinated young children."

            "Their soft voices have been muffled for nearly two years and we are one of the few countries masking toddlers and grade school children," the parent added. "It’s not lost on me that this severe obligation on kids would not exist if it weren’t for Ms. Weingarten and the other corrupt leaders that run our public education system."
            </div>
            }  
        </>
        {/* } */}
       
    </>
    )

}