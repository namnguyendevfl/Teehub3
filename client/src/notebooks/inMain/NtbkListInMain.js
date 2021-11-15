import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ntbks } from "../../utils/localStorage/notebooks";
import { ntbkSelectedUrl } from "../../utils/localStorage/urls";
import DnD from "../../utils/dnd/DnD";
import { login } from "../../utils/localStorage/accounts";
import { listNtbks } from "../../utils/api/notebooks";
import Errors from "../../errors/errors";
import { listChaps } from "../../utils/api/chapters";


export default function NtbkList(props) {
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
    //Use useState and useEffect to update the state immediately
    const [ notebooks, setNotebooks ] = useState([])
    // useEffect (() => {
    //     setNotebooks(() => ntbks.getNtbks() ? ntbks.getNtbks() :[])
    // }, [ntbkAlteredCount])
    const [ test, setTest ] = useState()
    const [ error, setError ] = useState(null)
    useEffect(() => {
        listNtbks()
        .then(setNotebooks)
        .catch(setError)
        // listNtbks()
        // .then(setTest)
        // .catch(setError)


    },[])

    // console.log(ntbks.getNtbkSelected())
    // console.log(test)
    const ntbkList = notebooks.map((ntbk,idx) => {
        return (
        <li className = "list-group-item m-0 p-0 w-100">
            <Link className = "link"
                to = {`${ntbk.title.replaceAll(" ","-")}`}
                >
                <button className = "list-group-item w-100 m-0 text-start"
                    onClick = {(e) => {                        
                        setNtbkSelected (() => ntbk);
                        ntbks.saveNtbkSelected(ntbk);
                        ntbkSelectedUrl.saveUrl(`notebooks/${ntbk.title.replaceAll(" ","-")}`)
                    }}
                > 
                    {ntbk.title}
                </button>
            </Link>
        </li>
    )})
    return (
        <>
        {/* <p style = {{background:"white"}} className = "px-2">
        Speaking to Fox News, a parent in California who has witnessed the impact of masking school children, said: "Parents have been begging for the same consideration that teacher union and education leaders extended to themselves; for their kids to be able to hear their classmates. Randi is at higher risk of severe covid as a vaccinated senior than my unvaccinated young children."

"Their soft voices have been muffled for nearly two years and we are one of the few countries masking toddlers and grade school children," the parent added. "It’s not lost on me that this severe obligation on kids would not exist if it weren’t for Ms. Weingarten and the other corrupt leaders that run our public education system."        
        </p> */}
        <Errors error = {error} />
        <ul className = "list-group">
            {ntbkList}
        </ul>
        {/* <DnD notebooks = {notebooks}/> */}
        </>
    )
}