import React from "react";
import { Routes, Route } from "react-router";
import ChapterList from "../notebooks/inMain/ChapListInMain";
import NtbkList from "../notebooks/inMain/NtbkListInMain";
import TopicList from "../notebooks/inMain/TopicListInMain";

export default function NotebookRoute(props) {
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

    return (
        <Routes>
            <Route  path = "/" 
                    element = {
                        <NtbkList  
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
                        />} />
            <Route path = ":bookId" 
                    element = {
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
                        />}/>
            <Route path =":bookId/:chapterId" 
                    element = {
                    <TopicList 
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
                        ntbkEdit = {ntbkEdit}
                        setNtbkEdit = {setNtbkEdit}                          
                        />} />
        </Routes>
    )
}