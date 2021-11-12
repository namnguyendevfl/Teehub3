import React, { useEffect } from "react";
import  useState  from 'react-usestateref'
import { topcs } from "../../utils/localStorage/notebooks";
import TopicListEdit from "./TopicListEdit";

export default function TopicList(props) {
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
    const [ topics, setTopics ] = useState([])
    useEffect (() => {
        const initalTopics = topcs.getTopics() ? topcs.getTopics() : []
        setTopics(()=> initalTopics)  
    },[topicAlteredCount])
    //There is a bug when refreshing the page. It doesnt show the correct topicList => need to fix this
    // const topicsSelected = topics.filter((topic,idx) => topic.bookId === ntbkToDisplay.id && topic.chapterId === chapterToDisplay.id)
    const topicsSelected = topics.filter((topic,idx) => {
        if(ntbkSelected && chapSelected)
        return topic.bookId === ntbkSelected.id && topic.chapterId === chapSelected.id
        else return []
    })
    const [ newNtbk, setNewNtbk, newNtbkRef ] = useState(ntbkSelected)
    const [ newChap, setNewChap, newChapRef ] = useState(chapSelected)
    const topicList = topicsSelected.map((topic, mapIdx) => {
        const contents = topic.content.split('\n')
        const newContents = contents.filter((content,idx) => content.replace('\n', '').length)
        return (
            <>
                <section    id = {`${topic.title}`} 
                            className = "topicDisplay px-3 pb-1"
                >
                    <div style = {{height:"0.3px"}}></div>    
                    <h6 className ="mt-0">{topic.title}</h6>
                    <p  className = "displayText w-100 my-1 p-0" >
                        {newContents.join('\n')}
                    </p>
                    <div style = {{height:"1px"}}></div>         
                </section>
            </>
    )})
    return ( newNtbkRef.current && newChapRef.current &&
        <>
        {
        !ntbkEdit &&
        <>
            <div className = "bg-white "
                style = {{border: "1px solid #e9ecef", margin:"0px 3px"}}
            >
                <div    className = "ntbkTitleDivHeight w-100 d-flex justify-content-center align-items-center " >
                    <span className = "ntbkHeader text-center m-0 " >
                        {newNtbkRef.current.title}
                    </span>
                </div>
                <hr className = "m-0"/>
                <div >           
                    <h5 className = "text-start my-1 text-center "> 
                        {newChapRef.current.title}
                    </h5>
                </div>
                <div style = {{height: "6.5px"}}></div>
                <div className = "">
                    {topicsSelected.length !== 0
                    ? topicList
                    : <div className = "py-1"> </div>
                    }
                </div>
            </div>
        </>
        }
        <TopicListEdit 
            ntbkSelected = {newNtbkRef.current}
            setNtbkSelected = {setNtbkSelected}
            ntbkAlteredCount = {ntbkAlteredCount} 
            setNtbkAlteredCount = {setNtbkAlteredCount}  
            // chapSelected = {chapSelected}
            chapSelected = {newChapRef.current}
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
            newNtbk = {newNtbk}
            setNewNtbk = {setNewNtbk}
            newNtbkRef = {newNtbkRef}
            newChap = {newChap}
            setNewChap = {setNewChap}
            newChapRef = {newChapRef}
            topics = {topics}
            setTopics = {setTopics}
        />
     
        </>

    )
}