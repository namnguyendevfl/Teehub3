import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ntbks, chaps } from "../../utils/localStorage/notebooks";
import { chapSelectedUrl } from "../../utils/localStorage/urls";
import DnD from "../../utils/dnd/DnD";

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
    } = props
    const [ chapters, setChapters ] = useState([])
    useEffect(() => { 
        setChapters(() => chaps.getChaps() ? chaps.getChaps() : []) 
    }, [chapAlteredCount])
    const chapsSelected = chapters.filter((chapter, idx) => chapter.bookId === ntbkSelected.id);
    const chapterList = chapsSelected.map((chapter,idx) => {
        return(<li className = "list-group-item m-0 p-0 w-100">
            <Link   className = "link"
                    to = {`${chapter.title.replaceAll(" ","-")}`} 
                    // to = {`${url}/${chapter.title.replaceAll(" ","-")}`} 
                    >
                <button className = "list-group-item w-100 m-0 text-start"
                    onClick = {(e) => {
                        // e.preventDefault();. Cant use it overhere b/c Link will not work
                        setChapSelected (() => chapter);
                        chaps.saveChapSelected(chapter);
                    }}
            > 
                {chapter.title}
            </button>
            </Link>
        </li>
    )})
    return (
        <>
        <div className = "bg-white">
        <div    className = "w-100 d-flex justify-content-center align-items-center "
            style = {{height:"40px"}}
            >
        <h3 className = "m-0 text-center "> {ntbkSelected.title} </h3>
        </div>
        <hr className ="m-0 p-0"/>
        <ul className = "list-group">
            {chapterList}
        </ul>
        </div>
        {/* <DnD chapters = {chapsSelected} /> */}
        </>
    )
}