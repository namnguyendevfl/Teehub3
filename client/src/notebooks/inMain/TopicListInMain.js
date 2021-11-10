import React, { useState } from "react";
import Notebooks from "../../complementary/Notebooks";
import { chaps, ntbks, topcs } from "../../utils/localStorage/notebooks";
import { main, CaretDown } from "../../utils/icons/main/main";
import OptionBar from "../inComplementary/optionBar/optionBar";

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
    } = props

    const [ displayTooltip, setDisplayToolTip ] = useState(false);
    const [ displayBar, setDisplayBar ] = useState(true)
    const topics = topcs.getTopics()
    //There is a bug when refreshing the page. It doesnt show the correct topicList => need to fix this
    // const topicsSelected = topics.filter((topic,idx) => topic.bookId === ntbkToDisplay.id && topic.chapterId === chapterToDisplay.id)
    const topicsSelected = topics.filter((topic,idx) => {
        if(ntbkSelected && chapSelected)
        return topic.bookId === ntbkSelected.id && topic.chapterId === chapSelected.id
        else return []
    })
    const topicList = topicsSelected.map((topic, mapIdx) => {
        const contents = topic.content.split("\n")
                // remove spaces and empty lines
        const newContents = contents.filter((content,idx) => content.replace(/\s/g, '').length)
        const newTopics = topicsSelected.filter((topic, filterIdx) => filterIdx !== mapIdx)        
        return (
            <>
                <section    id = {`${topic.title}`} 
                            className = "topicDisplay px-3 pb-1"
                >
                <h6>{topic.title}</h6>
                <p className = "displayText"> {newContents.join('\n')} </p>
                {/* {newContents.length
                ?   <p className = "displayText"> {newContents.join('\n')} </p>
                :   <CreateTopicContent topic = {topic} newTopics = {newTopics} mapIdx = {mapIdx} topics = {topics}/>
                } */}
                </section>
            </>
    )})
    return ( ntbkSelected && chapSelected &&
        <>
        <div className = "bg-white">
            <div    className = "w-100 d-flex justify-content-center align-items-center "
                    style = {{height:"40px"}}
            >
            {/* <button className = "ntbkBtn d-flex align-items-center justify-content-center ms-1"
                    onClick = {(e) => {
                        setDisplayNav(() => !displayNav)                  
                    }}
            >   
                {
                    displayNav 
                    ? main.leftChevron()
                    : main.rightChevron()
                }
            </button> */}
            <h3 className = "text-center m-0">
                {ntbkSelected.title}
                </h3>
            </div>
            <hr className = "m-0"/>
            <h5 className = "text-start my-2 text-center"> 
            Chapter {chapSelected.id}: {chapSelected.title}
            </h5>

            {topicList}
        </div>
        </>

    )
}