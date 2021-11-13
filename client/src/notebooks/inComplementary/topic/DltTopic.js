import React, { useState } from "react";
import { ListToDlt, topcs } from "../../../utils/localStorage/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";
import { useNavigate, useLocation } from "react-router-dom";

export default function DltTopic(props){
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

    const [ topsDlted, setTopsDlted ] = useState([])  
    const topics = topcs.getTopics().filter((topic, idx) => ntbkSelected && chapSelected && topic.bookId === ntbkSelected.id && topic.chapterId === chapSelected.id)
    const topsDltedIds = topsDlted.map((topDlt, idx) => topDlt.id) 
    const newTops = (!topsDlted) ? topics : topics.filter((topic, idx) => !topsDltedIds.includes(topic.id))
    let notebookUrl = window.localStorage.getItem('notebookUrl');
    notebookUrl = JSON.parse(notebookUrl);
    const url = useLocation().pathname;
    const navigate = useNavigate();
    return (
    <>
            <div className="row d-flex text-aligns-center m-0 justify-content-center">
            <div className = "col-2"></div>
            <h5 className = "ntbkOptnBoxTitle col-8 text-center m-0">Delete topic</h5>
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
            <ListToDlt 
                            optionsDlt = { topsDlted }
                            setOptionsDlt = { setTopsDlted }
                            indicator = {"topic"}
            />
        </div>
        <div className = "text-center w-100 px-3">
        <button 
            className = "mb-3 saveNtbk list-group-item w-100 d-flex align-items-center justify-content-center text-center "
            type = "submit"
            onClick = {
                (e) => {
                    e.preventDefault();
                    navigate(url);
                    setDropdown(() => !dropdown)
                    setTopicAlteredCount(() => topicAlteredCount + 1)
                    topcs.saveTopics(newTops);
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