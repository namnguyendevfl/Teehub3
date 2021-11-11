import React, { useEffect, useState } from "react";
import TextareaAutosize from "react-autosize-textarea"


export default function EditTopicContent(props) {
    const {
        topic, topics, mapIdx,
        count,
        setCount,
        edit,
        setEdit,
        topicAlteredCount,
        setTopicAlteredCount,
        setSelectedTopic 
    } = props
    const [ newTopic, setnewTopic ] = useState(topic)
    const handleChange = (e) => {
        setnewTopic((prevContent) => ({
            ...prevContent,
            [e.target.name]: e.target.value,
        }));
        setCount(() => count + 1)
        // console.log(e.key)
    }
    // console.log(newTopic)
    useEffect(() => {
        const savedContent = newTopic.content.split("\n")
        const newSavedContent = savedContent.filter((content,idx) => content.replace(/\s/g, '').length)
        const saveTopic = {
            ...newTopic,
            content: newSavedContent.join('\n')
        }
        topics.splice(mapIdx,1,saveTopic)
    },[count])
    
    return (
        <>
        <div>
            <h6 className ="mb-1">
            <TextareaAutosize
                className = "topiclistTopicTitleInput w-100 text-start m-0 p-0"
                id = "title"
                name = "title"            
                value = {newTopic.title}
                onChange = {handleChange}
            />
            </h6>
            <p className = "mb-0 p-0">
            <TextareaAutosize
                className = "topiclistTopicContentInput w-100 m-0 p-0 "
                type = "textarea"
                id = "content"
                name = "content"      
                value = {newTopic.content}
                onChange ={(e) => handleChange(e)} 
                // onKeyDown = {(e) => {
                //     console.log(e.key)
                //     const value = e.target.value
                //     if (e.key === "Tab") {
                //     setnewTopic((prevContent) => ({
                //         ...prevContent,
                //         [e.target.name]: e.target.value + "\t",
                //     }))
                //     console.log("hello")
                // };
                // }}
            />
            </p>
        </div>
    </>
    )
}