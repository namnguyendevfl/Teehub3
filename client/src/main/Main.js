import "./Main.css"
import React from "react";
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
        ntbkEdit,
        setNtbkEdit
    } = props
    const ntbkToDisplay = ntbkSelected ? ntbkSelected : ntbks.getNtbkSelected()
    const chapToDisplay = chapSelected ? chapSelected : chaps.getChapSelected()
    return (
        <>
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route  path = "notebooks/*" 
                    element = {<NotebookRoute 
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
                    />}
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