import React, { useState } from "react";
import { ListToDlt, topcs } from "../../../utils/localStorage/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";
import { useNavigate } from "react-router-dom";

export default function DltTopic(props){
    const {
        option,
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain, 
        optionBarUrl,
        setOptionBarUrl,
        dropdown, 
        setDropdown 
    } = props

    const [ topsDlted, setTopsDlted ] = useState([])  
    const topics = topcs.getTopics().filter((topic, idx) => ntBkSelected && chapSelected && topic.bookId === ntBkSelected.id && topic.chapterId === chapSelected.id)
    const topsDltedIds = topsDlted.map((topDlt, idx) => topDlt.id) 
    const newTops = (!topsDltedIds) ? topics : topics.filter((topic, idx) => !topsDltedIds.includes(topic.id))
    let notebookUrl = window.localStorage.getItem('notebookUrl');
    notebookUrl = JSON.parse(notebookUrl);
    console.log(notebookUrl)
    const navigate = useNavigate();
    return (
    <>
            <div className="row d-flex text-aligns-center m-0 justify-content-center">
            <div className = "col-2"></div>
            <h5 className = "col-8 text-center m-0 py-3">Delete topic</h5>
            <div className = "col-2 m-0 d-flex align-items-center justify-content-end">
                <button className = "ntbkBtn d-flex align-items-center p-2 "
                        onClick = {(e) => setDropdown (() => !dropdown)}
                >
                    {complementary.escape()}
                </button>
            </div>
        </div>
        <hr className =" m-0 p-0"/>
        <div className = "boxList">
            <ListToDlt 
                            optionsDlt = { topsDlted }
                            setOptionsDlt = { setTopsDlted }
                            indicator = {"topic"}
            />
        </div>
        <div className = "position-absolute bottom-0 text-center w-100 px-3">
        <button 
            className = "mb-3 save list-group-item w-100 d-flex align-items-center justify-content-center text-center "
            type = "submit"
            onClick = {
                (e) => {
                    e.preventDefault();
                    navigate(`${notebookUrl}`);
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