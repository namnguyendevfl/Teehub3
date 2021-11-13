import React, { useState } from "react";
import { ListToDlt, ntbks, chaps, topcs } from "../../../utils/localStorage/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";
import { useNavigate } from "react-router-dom";

export default function DltNtBk(props){
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
    const [ ntbksDlted, setNtbksDlted ] = useState ([]);
    const notebooks = ntbks.getNtbks();
    const chapters = chaps.getChaps();
    const topics = topcs.getTopics();
    const ntbksDltedIds = ntbksDlted.map((ntbkDlt, idx) => ntbkDlt.id) 
    const newNotebooks = (!ntbksDlted) ? notebooks : notebooks.filter((notebook, idx) => !ntbksDltedIds.includes(notebook.id))
    const newChaps = (!ntbksDlted) ? chapters : chapters.filter((chapter, idx) => !ntbksDltedIds.includes(chapter.bookId))
    const newTops = (!ntbksDlted) ? topics : topics.filter((topic, idx) => !ntbksDltedIds.includes(topic.bookId))

    return (
    <>
            <div className="row d-flex text-aligns-center m-0 justify-content-center">
            <div className = "col-2"></div>
            <h5 className = "ntbkOptnBoxTitle col-8 text-center text-dark m-0">Delete notebook</h5>
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
                        optionsDlt = { ntbksDlted }
                        setOptionsDlt = { setNtbksDlted }
                        indicator = {"notebook"}
            />
        </div>
        <div className = "position-absolute bottom-0 text-center w-100 px-3">
        <button 
            className = "mb-3 saveNtbk list-group-item w-100 d-flex align-items-center justify-content-center text-center "
            type = "submit"
            onClick = {
                (e) => {
                    e.preventDefault();
                    setDropdown(() => !dropdown);
                    setNtbkAlteredCount(() => ntbkAlteredCount + 1);
                    ntbks.saveNtbks(newNotebooks);
                    chaps.saveChaps(newChaps);
                    topcs.saveTopics(newTops);
                }
            }
            >
            Save
        </button>
        </div>
      
    </>
    )
}