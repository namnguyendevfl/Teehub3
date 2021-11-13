import React, { useEffect, useState } from "react";
import { ListToDlt, topcs } from "../../../utils/localStorage/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";
import { useNavigate, useLocation } from "react-router-dom";
import DnD from "../../../utils/dnd/DnD";

export default function EditTopic(props){
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
    } = props

    const [ topsEdited, setTopsEdited ] = useState([])  
    const originalTopics = topcs.getTopics() ? topcs.getTopics() : []
    const topics = originalTopics.filter((topic, idx) => chapSelected && topic.bookId === chapSelected.bookId && topic.chapterId === chapSelected.id) 
    const url = useLocation().pathname;
    const navigate = useNavigate();
    return (
    <>
            <div className="row d-flex text-aligns-center m-0 justify-content-center">
            <div className = "col-2"></div>
            <h5 className = "ntbkOptnBoxTitle col-8 text-center m-0">Edit topic</h5>
            <div className = "col-2 m-0 d-flex align-items-center justify-content-end">
                <button className = "ntbkBtn d-flex align-items-center p-2 "
                        onClick = {(e) => setDropdown (() => !dropdown)}
                >
                    {complementary.escape()}
                </button>
            </div>
        </div>
        <hr className =" m-0 p-0"/>
        <div className = "ntbkOptnBoxList">
            <DnD 
                optionsEdited = { topsEdited }
                setOptionsEdited = { setTopsEdited }
                topics = {topics}
                count = {topicAlteredCount}
                setCount = {setTopicAlteredCount}
                // indicator = {"topic"}
            />
        </div>
        <div className = "text-center w-100 px-3">
        <button 
            className = "mb-3 saveNtbk list-group-item w-100 d-flex align-items-center justify-content-center text-center "
            type = "submit"
            onClick = {
                (e) => {                    
                    e.preventDefault();
                    setDropdown(() => !dropdown)
                    setTopicAlteredCount(() => topicAlteredCount + 1)
                    navigate(url);
                    topcs.saveTopics(topsEdited);
                }
            }
            >
            Save
            {/* <Plus /> */}
        </button>
        </div>
      
    </>
    )
}