import "./Main.css"
import React, { useState } from "react";
import { Routes,Route } from "react-router-dom";
import Home from "../home/Home";
import { ntbks, chaps } from "../utils/localStorage/notebooks";
import NotebookRoute from "./NotebookRoute";

export default function MainLayout(props) {
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
    const ntbkToDisplay = ntbkSelected ? ntbkSelected : ntbks.getNtbkSelected()
    const chapToDisplay = chapSelected ? chapSelected : chaps.getChapSelected()
    const initialHeight = window.innerHeight
    const [ viewHeight, setViewHeight ] = useState(initialHeight - 80)
    const handleResize = () => {
        setViewHeight(() => window.innerHeight - 80)
    }
    window.addEventListener('resize', handleResize);
    const mainStyleNtbk = (() => {
        if (navOption === "Notebooks") {
            return {
                maxHeight: `${viewHeight}px`,
                overflow: "auto",
            }
        }
        return {
            overflow :"hidden"
        }
    })()
    
    return (
        <>
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route  path = "notebooks/*" 
                    element = {
                    <div className = "ntbkMain"
                    style = {mainStyleNtbk}
                    >
                    <NotebookRoute 
                        ntbkSelected = {ntbkToDisplay}
                        setNtbkSelected = {setNtbkSelected}
                        ntbkAlteredCount = {ntbkAlteredCount} 
                        setNtbkAlteredCount = {setNtbkAlteredCount}  
                        chapSelected = {chapToDisplay}
                        setChapSelected = {setChapSelected}
                        chapAlteredCount = {chapAlteredCount}
                        setChapAlteredCount = {setChapAlteredCount}
                        topicAlteredCount = {topicAlteredCount}
                        setTopicAlteredCount = {setTopicAlteredCount}
                        displayNav = {displayNav}
                        setDisplayNav = {setDisplayNav}
                        displayCom = {displayCom}
                        setDisplayCom = {setDisplayCom}                
                        ntbkEdit = {ntbkEdit}
                        setNtbkEdit = {setNtbkEdit}   
                    />
                    </div>
                    }
            />
                {/* <div className = "bg-white"> */}
                {/* <NoteBookRoute 
                    ntBkSelected = {ntBkSelected}
                    setNtBkSelected = {setNtBkSelected}
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    displayLeftMain = {displayLeftMain}
                    setDisplayLeftMain = {setDisplayLeftMain}
                    displayRightMain = {displayRightMain}
                    setDisplayRightMain = {setDisplayRightMain}
                /> */}
                {/* </div> */}
        </Routes>
        </>
    )
}