import React, { useEffect } from "react";
import  useState  from 'react-usestateref'
import { chaps, ntbks, topcs } from "../../utils/localStorage/notebooks";
import EditTopicContent from "./EditTopicContent";
import TextareaAutosize from "react-autosize-textarea"
import { main, Save } from "../../utils/icons/main/main";

export default function TopicListEdit(props) {
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
        setNtbkEdit,
        newNtbk, setNewNtbk, newNtbkRef,
        newChap, setNewChap, newChapRef,
        topics,
        setTopics
    } = props

    const [ edit, setEdit ] = useState(false);
    const [ selectedTopic, setSelectedTopic] = useState();
    //There is a bug when refreshing the page. It doesnt show the correct topicList => need to fix this
    // const topicsSelected = topics.filter((topic,idx) => topic.bookId === ntbkToDisplay.id && topic.chapterId === chapterToDisplay.id)
    const topicsSelected = topics.filter((topic,idx) => {
        if(ntbkSelected && chapSelected)
        return topic.bookId === ntbkSelected.id && topic.chapterId === chapSelected.id
        else return []
    })
    const notebooks = ntbks.getNtbks() ? ntbks.getNtbks() : []
    const chapters = chaps.getChaps() ? chaps.getChaps() : []
    const [ newNtbks, setNewNtbks ] = useState(notebooks);
    const [ newChaps, setNewChaps ] = useState(chapters);
    const [ newTopics, setNewTopics ] = useState(topics);
    const [ count, setCount ] = useState(0)
    const ntbkSelectedIdx = (() =>{
        for (let i = 0; i < notebooks.length; i++){
            if (notebooks[i].id === ntbkSelected.id)
            return i
        }
        return -1
    })()
    const chapSelectedIdx = (() =>{
        for (let i = 0; i < chapters.length; i++){
            if (chapters[i].id === chapSelected.id)
            return i
        }
        return -1
    })()

    useEffect (() => {
        newNtbks.splice(ntbkSelectedIdx,1,newNtbkRef.current)
        newChaps.splice(chapSelectedIdx,1,newChapRef.current)
    },[newNtbkRef.current, newChapRef.current]);

    const handleChangeNtbkTitle = ({target: {name, value}}) => {
        setNewNtbk((prevNtbk) => ({
            ...prevNtbk,
            [name]: value
        }))
        setTopicAlteredCount(() => topicAlteredCount + 1 )
    }
    const handleChangeChapTitle = ({target: {name, value}}) => {
        setNewChap((prevChap) => ({
            ...prevChap,
            [name]: value
        }))
        setTopicAlteredCount(() => topicAlteredCount + 1 )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        ntbks.saveNtbks(newNtbks);
        ntbks.saveNtbkSelected(newNtbkRef.current)
        chaps.saveChaps(newChaps);
        chaps.saveChapSelected(newChapRef.current)
        setTopics(() => newTopics);
        topcs.saveTopics(newTopics);
        setNtbkSelected(() => newNtbkRef.current);
        setChapSelected(() => newChapRef.current);
        setNtbkEdit(() => !ntbkEdit);
    }

    const topicListEdited = topicsSelected.map((topic, mapIdx) => (
        <>
            <section    id = {`${topic.title}`} 
                        className = "topicDisplay px-3 pb-1"
            >
                <EditTopicContent 
                            topic = {topic} 
                            mapIdx = {mapIdx} topics = {newTopics}
                            edit = {edit}
                            setEdit = {setEdit}
                            count = {count}
                            setCount = {setCount}
                            topicAlteredCount = {topicAlteredCount}
                            setTopicAlteredCount = {setTopicAlteredCount}
                            selectedTopic = {selectedTopic}
                            setSelectedTopic = {setSelectedTopic}
                />
            </section>
        </>
    ))
    return ( ntbkSelected && chapSelected && ntbkEdit &&
        <form onSubmit = {handleSubmit}>
            <div className = "bg-white topiclistBox border border-primary">    
                <div    className = "ntbkTitleDivHeight w-100 py-1 d-flex justify-content-center align-items-center " >
                    <h3 className = "d-flex align-items-center m-0 w-100" >
                        <input
                            className = "topicNtbkTitleInput w-100 text-center m-0 p-0"
                            type = "text"
                            id = "title"
                            name = "title"
                            value = {newNtbk.title}
                            onChange = {handleChangeNtbkTitle}
                        >
                        </input>   
                    </h3>
                </div>
                <hr className = "m-0"/>
                <div>
                    <TextareaAutosize
                        className = "topicChapTitleInput w-100 text-center my-1 p-0"
                        type = "textarea"
                        id = "title"
                        name = "title"
                        value = {newChap.title}
                        onChange = {handleChangeChapTitle}
                    />
                </div>
                <div className = "">
                    {topicsSelected.length !== 0
                    ? topicListEdited
                    : <div className = "py-1 "> </div>
                    }
                </div>
                <div className = "d-flex justify-content-start ">
                    <div className = "btnPanel ms-1 d-flex align-items-center" >
                        {/* <div  className = "expandBtnOffset ms-1 ">
                            <div className = "expandBtnOffset p-0 "  >  */}
                        <div  className = "saveBtn ms-1 ">
                            <div className = "saveBtn p-0 "  >           
                                {main.leftChevron()}
                            </div>
                        </div>
                        <div  className = "saveBtn ms-1 ">
                            <button className = "saveBtn p-0 " 
                                    type = "submit"
                            >
                                <Save />  
                            </button>
                        </div>
                    </div>
                </div>           
            </div>                
        </form>
    )
}