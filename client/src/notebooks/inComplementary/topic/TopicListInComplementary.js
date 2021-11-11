import React from "react";
import { topcs } from "../../../utils/localStorage/notebooks";

export default function TopicList(props) {
    const {
        ntbkSelected,
        chapSelected, 
    } = props    
    const topics = topcs.getTopics()
    const topicsSelected = topics.filter((topic, idx) => topic.bookId === ntbkSelected.id && topic.chapterId === chapSelected.id);
    const topicList = (topicsSelected) && topicsSelected.map((topic, idx) => {
        const header = `${idx + 1}. ${topic.title}`
        return <>
        <li key = {idx} className = "ntbkDropdown bg-transparent  list-group-item m-0 p-0 border-white"> 
            <a className = "ntbkDropdown bg-transparent  list-group-item w-100 d-flex border-white ps-4 text-decoration-none text-secondary"
            href={`#${topic.title}`}>
                <span style = {{fontSize : "15px"}} className = "text-white"> {header} </span>
            </a>
        </li>
        </>
    })
    return ( 
        <>  
            <ul className = "list-group dropdownListBox">
                {topicList}
            </ul>
        </>
    )
}