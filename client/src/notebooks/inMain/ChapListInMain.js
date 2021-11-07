import React from "react";
import { Link } from "react-router-dom";
import { ntbks, chaps } from "../../utils/data/notebooks";
import { useParams, useLocation } from "react-router-dom"

export default function ChapterList(props) {
    const {
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain, 
    } = props
    // console.log("chaps in main")
    const chapters = chaps.getChapList()
    const ntBkSelectedLcalStorg = ntbks.getNtBkSelected()
    const ntBkToDisplay = (ntBkSelected) ? ntBkSelected : ntBkSelectedLcalStorg
    //In case when we refresh, the ntBkSelected is still available 
    const chapsSelected = chapters.filter((chapter, idx) => chapter.bookId === ntBkToDisplay.id);
    const url = useLocation().pathname;
    const chapterList = chapsSelected.map((chapter,idx) => (
        <li className = "list-group-item m-0 p-0 w-100">
            <Link   className = "link"
                    to = {`${url}/${chapter.title.replaceAll(" ","-")}`} 
                    >
                <button className = "list-group-item w-100 m-0 text-start"
                    onClick = {(e) => {
                        // e.preventDefault();. Cant use it overhere b/c Link will not work
                        setChapSelected (() => chapter);
                        chaps.saveChapSelected(chapter);
                        // To make Link work over here, you have to use Route over here. To store selectedBook after refesh, we need to use localStorage
                    }}
            > 
                {chapter.title}
            </button>
            </Link>
        </li>
    ))
    return (
        <>
        <div> This is the chapter list</div>
        <h3 className = "m-0 text-center py-2 "> {ntBkToDisplay.title} </h3>
        <hr className ="m-0 p-0"/>
        <ul className = "list-group">
            {chapterList}
        </ul>
        </>
    )
}