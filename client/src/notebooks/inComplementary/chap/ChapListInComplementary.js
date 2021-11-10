import React, { useState } from "react";
import TopicList from "../topic/TopicListInComplementary";
import { Link } from "react-router-dom"
import { chaps, topcs } from "../../../utils/localStorage/notebooks";
import { Switch, CaretDown } from "../../../utils/icons/complementary/Complementary";
import { chapSelectedUrl, ntbkSelectedUrl } from "../../../utils/localStorage/urls";

export default function ChapterList(props) {
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
        ntbkExpand, 
        setNtbkExpand,
        navOption,
        setNavOption,
        ntbkStyle,
        setNtbkStyle,
        ntbkTextStyle,
        setNtbkTextStyle  
    } = props

    const [ topicsDropdown, setTopicsDropdown ] = useState(false)
    const [ switchChap, setSwitchChap ] = useState(false);
    const chapters = chaps.getChaps();
    const chapsSelected = chapters.filter((chapter,idx) => (ntbkSelected) ? chapter.bookId === ntbkSelected.id : chapter)
    const unchosenChapters = chapsSelected.filter((chapter, idx) => (chapSelected) ? chapter.id !== chapSelected.id : chapter.id);
    const dropdownList = unchosenChapters.map((chapter,idx) => {
        const url = `${ntbkSelectedUrl.getUrl()}/${chapter.title.replaceAll(" ","-")}`
        return (
        <li className = "bg-transparent list-group-item w-100 p-0 m-0">
            <Link   className = "link"
                    to = {`${url}`}
                    >
            <button     className = "bg-transparent ntbkDropdown list-group-item w-100 text-start ps-4"
                        onClick = {(e) => {
                            setChapSelected(() => chapter);
                            chaps.saveChapSelected(chapter);
                            setSwitchChap(() => !switchChap);
                            //Dont need this 
                            // chapSelectedUrl.saveUrl(`${url}`)
                        }}
            > 
                <span style = {{fontSize : "15px"}} className = "text-white"> {chapter.title} </span>
            </button>
            </Link>
        </li>
    )})
    window.addEventListener("click",({target}) => {
        const targetId= target.id
        if (targetId !== "switchChap") 
        setSwitchChap(() => false)
        if (targetId !== "topicList") 
        setTopicsDropdown(() => false)
    })
    
    
    //Remove the caret down if there are no topics
    const topics = topcs.getTopics() 

    // const topicsSelected = []
    const topicsSelected = topics.filter((topic, idx) => {
        if (ntbkSelected && chapSelected)
        return topic.bookId === ntbkSelected.id && topic.chapterId === chapSelected.id
        return []
    });
    return ( ntbkSelected && 
    <>
    <div>
        <ul className = "list-group"> 
                <li className = "ntbkBar bg-transparent list-group-item py-1 d-flex align-items-center justify-content-between"
                    // style = {ntbkStyle}
                > 
                    <h6 className = "bg-transparent d-flex align-items-center pb-0 pt-1"> 
                    {
                        chapSelected && chapSelected.bookId === ntbkSelected.id
                        ? chapSelected.title
                        : <span className = " fs-6"> Chapters </span>
                    }         
                    </h6>
                    <div className = "d-flex align-items-center ms-2">
                        {
                            chapSelected && chapSelected.bookId === ntbkSelected.id 
                            && topicsSelected.length !== 0 
                            && <button className = "ntbkBtn"
                                    id = "topicList"
                                    onClick = {(e) => {
                                        setTopicsDropdown(() => !topicsDropdown)
                                    }}
                                > 
                                <CaretDown 
                                    topicsDropdown = {topicsDropdown}
                                />
                                </button>  
                        }
                        {unchosenChapters.length !== 0 &&
                            <button className = "ntbkBtn"
                                    // style = {ntbkStyle}
                                    id = "switchChap"
                                    onClick = {(e) => {
                                    setSwitchChap(() => !switchChap)
                                            }}
                            > 
                                <Switch 
                                    switchChap = { switchChap }
                                />
                            </button>
                        }
                    </div>
                </li>
        </ul>
                {
                    switchChap
                    ?   
                    <ul className = "list-group dropdownListBox">
                    { dropdownList} 
                    </ul>
                    :   null
                }
                {
                    chapSelected && chapSelected.bookId === ntbkSelected.id && topicsDropdown
                    ?               
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
                        ntbkStyle = { ntbkStyle }
                        setNtbkStyle = { setNtbkStyle }  
                        ntbkTextStyle = { ntbkTextStyle}
                        setNtbkTextStyle = {setNtbkTextStyle}               
                    />
                    :   null
                } 
               
        </div>

    </>
    )
}