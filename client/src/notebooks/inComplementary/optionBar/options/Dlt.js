import React from "react";
import { ntbks, chaps } from "../../../../utils/localStorage/notebooks";
import DltChapter from "../../chap/DltChap";
import DltNtBk from "../../notebook/DltNtbk";
import DltTopic from "../../topic/DltTopic";

export default function Dlt(props){
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
        option,
        dropdown,
        setDropdown,
    } = props
    if (!ntbkSelected) {
        return (
            <>
                < DltNtBk
                    option = {option} 
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
                    dropdown = {dropdown}
                    setDropdown = { setDropdown }   
                />
            </>
        )
    }

    if (!chapSelected) {
        return (
            <>
                <DltChapter  
                      option = {option} 
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
                      dropdown = {dropdown}
                      setDropdown = { setDropdown }    
                />           
            </>
        )
    }
    return (
        <>
            <DltTopic 
                  option = {option} 
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
                  dropdown = {dropdown}
                  setDropdown = { setDropdown }     
                /> 
        </>
    )
}