import React from "react"
import TextareaAutosize from "react-autosize-textarea"
import { topcs } from "../../../utils/localStorage/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";

export default function AddTopicContent(props){
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
        displayAddOption, setDisplayAddOption,
        displayContent, setDisplayContent,
        newTopic, setNewTopic
    } = props

    const originalTopics = topcs.getTopics() ? topcs.getTopics() : [];
    const initTopic = {
        id: "",
        title: "",
        content:"",
    }
    let selectedTopics = originalTopics.filter((topic, idx) => (chapSelected) && topic.bookId === chapSelected.bookId && topic.chapterId === chapSelected.id)
    selectedTopics = selectedTopics.sort((topicA, topicB) => topicA.id - topicB.id)
    //becareful string and number over here
    const handleChange = ({ target: {name, value}}) => {
        const contents = value.split("\n")
        const newContents = contents.filter((content,idx) => content.replace(/\s/g, '').length)
        setNewTopic((prevTopic) => ({
            ...prevTopic,
            // [name]: newContents.join('\n'),
            [name]: value,
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const savedContent = newTopic.content.split("\n")
        const newSavedContent = savedContent.filter((content,idx) => content.replace(/\s/g, '').length)
        const saveTopic = {
            ...newTopic,
            content: newSavedContent.join('\n')
        }
        originalTopics.push(saveTopic);
        setTopicAlteredCount(() => topicAlteredCount + 1)
        setDropdown(() => !dropdown)
        setNewTopic(() => initTopic)
        topcs.saveTopics(originalTopics)
    };

    return (
        <>
     <div className="row d-flex text-aligns-center m-0 justify-content-center">  
        <div className = "col-2 m-0 ps-2 d-flex align-items-center">
            <button className = "ntbkBtn d-flex align-items-center p-0 "
                    onClick = {(e) => setDisplayContent(() => !displayContent)}
            >
                {complementary.leftArrow()}
            </button>
        </div>
        <h5 className = "ntbkOptnBoxTitle col-8 text-center m-0 ">
            <span className = ""> Create topic content </span>
        </h5>  
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
        <div>
            <TextareaAutosize
                className = "textarea ntbkTextarea w-100 px-3 pt-2 text-start w-100"
                type = "textarea"
                id = "content"
                name = "content"
                placeholder = "Write a content..."
                value = {newTopic.content}
                onChange = {handleChange}
            />
        </div>

        <div className = "text-center w-100 px-3">
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
                    type = "submit"
                    >
                    Save
                </button>       
        </div>
</form>
</>
    )
}