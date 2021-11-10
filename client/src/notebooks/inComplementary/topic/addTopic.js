import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import TextareaAutosize from "react-autosize-textarea"
import { topcs } from "../../../utils/localStorage/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";

export default function AddTopic(props){
    const {
        option,
        ntbkSelected,
        setNtbkSelected, 
        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain, 
        optionBarUrl,
        setOptionBarUrl,
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
    const originalTopics = topcs.getTopics();

    let selectedTopics = originalTopics.filter((topic, idx) => (chapSelected) && topic.bookId === chapSelected.bookId && topic.chapterId === chapSelected.id)
    selectedTopics = selectedTopics.sort((topicA, topicB) => topicA.id - topicB.id)
    //becareful string and number over here
    const handleChange = ({ target: {name, value}}) => {
        setNewTopic((prevTopic) => ({
            ...prevTopic,
            [name]: value,
            userId: userId,
            bookId: bookId,
            chapterId: id,
            id: selectedTopics.length + 1
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

    <div className="row d-flex text-aligns-center m-0 justify-content-center">    
        {
            displayContent
                ?   <>
                    <div className = "col-2 m-0 ps-2 d-flex align-items-center">
                        <button className = "ntbkBtn d-flex align-items-center p-0 "
                                onClick = {(e) => setDisplayContent(() => !displayContent)}
                        >
                            {complementary.leftArrow()}
                        </button>
                    </div>
                    <h5 className = "col-8 text-center m-0 py-3">Create topic - content</h5>
                    </>
                :   <>
                    <div className = "col-2"></div>
                    <h5 className = "col-8 text-center m-0 py-3">Create topic - title</h5>
                    </>
        }
       
        <div className = "col-2 m-0  d-flex align-items-center justify-content-end">
            <button className = "ntbkBtn d-flex align-items-center p-2 "
                    onClick = {(e) => setDropdown (() => !dropdown)}
            >
                {complementary.escape()}
            </button>
        </div>
    </div>
    <hr className =" m-0 p-0"/>

    <form className = ""
    onSubmit = {handleSubmit}>
    {
    !displayContent
    ?   <div>
            <input
            className = "list-group-item createInput px-3 text-start w-100"
            id = "title"
            name = "title"
            placeholder = "Write a topic title"
            value = {newTopic.title}
            onChange = {handleChange}
            >
            </input>
        </div>
    :   <div>
            <TextareaAutosize
                className = "w-100 createInput px-3 text-start w-100"
                type = "textarea"
                id = "content"
                name = "content"
                placeholder = "Write a content..."
                value = {newTopic.content}
                onChange = {handleChange}
            />
        </div>
    }
    <div className = "position-absolute bottom-0 text-center w-100 px-3">
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
        {
            !displayContent 
            ? <button 
                className = "save mb-3 list-group-item w-100 d-flex align-items-center justify-content-center text-center"
                onClick = {(e) => {
                    e.preventDefault();
                    setDisplayContent(() => true)}}
                >
                Add Content
            {/* <Plus /> */}
            </button>
            :         <button 
                className = "save mb-3 list-group-item w-100 d-flex align-items-center justify-content-center text-center"
                type = "submit"
                >
                Save
                {/* <Plus /> */}
            </button>
        }

    </div>
</form>
</>
    )
}