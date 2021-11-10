import React from "react";
import { ntbks, chaps } from "../../../../utils/localStorage/notebooks";
import AddChapter from "../../chap/AddChap";
import AddNtbk from "../../notebook/AddNtbk";
import AddTopic from "../../topic/addTopic";

export default function Add(props){
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
                <AddNtbk
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
                <AddChapter
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
        {/* <div className = "position-absolute"> */}
            <AddTopic 
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
        {/* </div> */}
        </>
    )
}