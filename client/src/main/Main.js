import React from "react";
import { Routes,Route } from "react-router-dom";

import Home from "../home/Home";
import NotebookRoute from "./NotebookRoute";

export default function MainLayout(props) {
    const {
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayNav, 
        setDisplayNav, 
        displayCom, 
        setDisplayCom, 
    } = props
    return (
        <>
        {/* <BrowserRouter > */}
        <Routes>
            <Route path = "/" element = {<Home />}/>
            <Route  path = "notebooks/*" 
                    element = {<NotebookRoute 
                        ntBkSelected = {ntBkSelected}
                        setNtBkSelected = {setNtBkSelected}
                        chapSelected = {chapSelected}
                        setChapSelected = {setChapSelected}
                        displayNav = {displayNav}
                        setDisplayNav = {setDisplayNav}
                        displayCom = {displayCom}
                        setDisplayCom = {setDisplayCom} 
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
        {/* </BrowserRouter> */}
        </>
    )
}