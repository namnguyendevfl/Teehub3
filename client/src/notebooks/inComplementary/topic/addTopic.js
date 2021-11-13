import React, { useState } from "react"
import TextareaAutosize from "react-autosize-textarea"
import { topcs } from "../../../utils/localStorage/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";
import AddTopicContent from "./addTopicContent";

export default function AddTopic(props){
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

    const { userId = " ", bookId = "", id = " "} = chapSelected || ""
    const [ displayAddOption, setDisplayAddOption ] = useState(false);
    const [ displayContent, setDisplayContent ] = useState(false)
    const initTopic = {
        id: "",
        title: "",
        content:"",
    }
    const [newTopic, setNewTopic] = useState(initTopic);
    const originalTopics = topcs.getTopics() ? topcs.getTopics() : [];

    const selectedTopics = originalTopics.filter((topic, idx) => (chapSelected) && topic.bookId === chapSelected.bookId && topic.chapterId === chapSelected.id)
    const selectedTopicIds = selectedTopics.map((topic, idx) => topic.id)
    const maxId = Math.max(...selectedTopicIds)
    //becareful string and number over here
    const handleChange = ({ target: {name, value}}) => {
        const contents = value.split("\n")
        const newContents = contents.filter((content,idx) => content.replace(/\s/g, '').length)
        const topicId = (() => {
            if (maxId > selectedTopics.length){
                for (let i = 1 ; i < maxId; i++){
                    if (!selectedTopicIds.includes(i))
                    return i
                }
            } else return selectedTopics.length + 1
        })() 
        setNewTopic((prevTopic) => ({
            ...prevTopic,
            [name]: newContents.join('\n'),
            userId: userId,
            bookId: bookId,
            chapterId: id,
            id: topicId
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        originalTopics.push(newTopic);
        setDropdown(() => !dropdown)
        setNewTopic(() => initTopic)
        topcs.saveTopics(originalTopics)
    };

    return (
        <> 
        {
            !displayContent &&
            <>
            <div className="row d-flex text-aligns-center m-0 justify-content-center">    
                <div className = "col-2"></div>
                <h5 className = "ntbkOptnBoxTitle col-8 text-center m-0 ">Create topic title</h5>  
                <div className = "col-2 m-0  d-flex align-items-center justify-content-end">
                    <button className = "ntbkBtn d-flex align-items-center p-2 "
                            onClick = {(e) => setDropdown (() => !dropdown)}
                    >
                        {complementary.escape()}
                    </button>
                </div>
            </div>
            <hr className =" m-0 p-0"/>
            <form className = "" onSubmit = {handleSubmit}>        
                <div>
                    <TextareaAutosize
                        className = "textarea ntbkTextarea w-100 px-3 pt-2 text-start w-100"
                        id = "title"
                        name = "title"
                        placeholder = "Write a topic title"
                        value = {newTopic.title}
                        onChange = {handleChange}
                    />
                </div>         
                <div className = " bottom-0 text-center w-100 px-3">
                {/* <div className = "position-absolute bottom-0 text-center w-100 px-3"> */}
                    <div className = "py-1 w-100 d-flex justify-content-between">
                        <p className = "m-0 "> Add to your note </p>
                        <div>
                            <button className = "ntbkBtn d-flex justify-content-center align-items-center"
                                    onClick = {(e) => {
                                        e.preventDefault();
                                        setDisplayAddOption (() => !displayAddOption);
                                    }}
                            >
                                {complementary.list()}
                            </button>
                        </div>
                    </div>
                    <button 
                        className = "saveNtbk mb-3 list-group-item w-100 d-flex align-items-center justify-content-center text-center"
                        onClick = {(e) => {
                            e.preventDefault();
                            setDisplayContent(() => true)}}
                        >
                        Add Content
                    {/* <Plus /> */}
                    </button>
                
                </div>
            </form>
            </>
        }
        {
            displayContent &&         
            <AddTopicContent 
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
            newTopic = { newTopic }
            setNewTopic = { setNewTopic }
            displayAddOption = {displayAddOption}
            setDisplayAddOption = {setDisplayAddOption}
            displayContent = {displayContent}
            setDisplayContent = {setDisplayContent}
            chapSelected = {chapSelected}
            />
        }


</>
    )
}