import React from "react";
import NtBkList from "../notebooks/inComplementary/notebook/NtBkListInComplementary";
import ChapterList from "../notebooks/inComplementary/chap/ChapListInComplementary";
import OptionBar from "../notebooks/inComplementary/optionBar/optionBar";
export default function Notebooks(props) {
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
        ntbkExpand, 
        setNtbkExpand,
        navOption,
        setNavOption,
        ntbkStyle,
        setNtbkStyle,
        ntbkTextStyle,
        setNtbkTextStyle  
    } = props 

    return (
    <>  
        <OptionBar 
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
            navOption = {navOption}
            setNavOption = {setNavOption}  
            ntbkStyle = { ntbkStyle }
            setNtbkStyle = { setNtbkStyle }  
            ntbkTextStyle = { ntbkTextStyle}
            setNtbkTextStyle = {setNtbkTextStyle}                                        
        />
        
        {
            !ntbkExpand &&
            <>
            <hr className = "p-0 m-0 mt-1"/>
            <NtBkList 
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
                ntbkStyle = { ntbkStyle }
                setNtbkStyle = { setNtbkStyle } 
                ntbkTextStyle = { ntbkTextStyle}
                setNtbkTextStyle = {setNtbkTextStyle}                                
            />  
            <ChapterList 
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
                ntbkStyle = { ntbkStyle }
                setNtbkStyle = { setNtbkStyle }  
                ntbkTextStyle = { ntbkTextStyle}
                setNtbkTextStyle = {setNtbkTextStyle}       
            />      
            </>         
        }
            
        {/* <NtBkList 
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
        />  
        <ChapterList 
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
        />                         */}
    </>
    )     
}