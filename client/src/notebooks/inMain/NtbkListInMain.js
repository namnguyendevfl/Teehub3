import React from "react";
import { Link } from "react-router-dom";
import { ntbks } from "../../utils/data/notebooks";

export default function NtbkList(props) {
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
    const notebooks = ntbks.getNtBkList();
    console.log(notebooks)
    const ntbkList = notebooks.map((ntbk,idx) => {
        const url = `/notebooks/${ntbk.title.replaceAll(" ","-")}`
        return (
        <li className = "list-group-item m-0 p-0 w-100">
            <Link className = "link"
                to = {`${url}`}
                >
                <button className = "list-group-item w-100 m-0 text-start"
                    onClick = {(e) => {
                        // e.preventDefault();. Cant use it overhere b/c Link will not work
                        setNtBkSelected (() => ntbk);
                        // To make Link work over here, you have to use Route over here. To store selectedBook after refesh, we need to use localStorage
                        ntbks.saveNtBkSelected(ntbk);
                    }}
            > 
                {ntbk.title}
            </button>
            </Link>
        </li>
    )})
    return (
        <>
        <ul className = "list-group">
            {ntbkList}
        </ul>
        </>
    )
}