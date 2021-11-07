import React from "react";
import { Routes, Route } from "react-router";
import ChapterList from "../notebooks/inMain/ChapListInMain";
import NtbkList from "../notebooks/inMain/NtbkListInMain";
import TopicList from "../notebooks/inMain/TopicListInMain";

export default function NotebookRoute(props) {
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
        <Routes>
            <Route  path = "/" 
                    element = {
                        <NtbkList  
                            ntBkSelected = {ntBkSelected}
                            setNtBkSelected = {setNtBkSelected}
                            chapSelected = {chapSelected}
                            setChapSelected = {setChapSelected}
                            displayNav = {displayNav}
                            setDisplayNav = {setDisplayNav}
                            displayCom = {displayCom}
                            setDisplayCom = {setDisplayCom}         
                        />} />
            <Route path = ":bookId" 
                    element = {
                        <ChapterList 
                            ntBkSelected = {ntBkSelected}
                            setNtBkSelected = {setNtBkSelected}
                            chapSelected = {chapSelected}
                            setChapSelected = {setChapSelected}
                            displayNav = {displayNav}
                            setDisplayNav = {setDisplayNav}
                            displayCom = {displayCom}
                            setDisplayCom = {setDisplayCom}                      
                        />}/>
            <Route path =":bookId/:chapterId" element = {<TopicList />} />
        </Routes>
    )
}