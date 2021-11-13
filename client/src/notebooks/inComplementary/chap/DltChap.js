import React, { useState } from "react";
import { ListToDlt, chaps, topcs } from "../../../utils/localStorage/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";

export default function DltChapter(props){
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

    const [ chapsDlted, setChapsDlted ] = useState([]) 
    const chapters = chaps.getChaps().filter((chapter, idx) => (ntbkSelected) && chapter.bookId === ntbkSelected.id)
    const topics = topcs.getTopics().filter((topic, idx) => (ntbkSelected) && topic.bookId === ntbkSelected.id);
    const chapsDltedIds = chapsDlted.map((chapDlt, idx) => chapDlt.id) 
    const newChaps = (!chapsDltedIds ) ? chapters : chapters.filter((chapter, idx) => !chapsDltedIds .includes(chapter.id))
    const newTops = (!chapsDltedIds ) ? topics : topics.filter((topic, idx) => !chapsDltedIds.includes(topic.chapterId))

    return (
    <>
            <div className="row d-flex text-aligns-center text-dark  m-0 justify-content-center">
            <div className = "col-2"></div>
            <h5 className = "ntbkOptnBoxTitle col-8 text-center m-0">Delete chapter</h5>
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
                            optionsDlt = { chapsDlted }
                            setOptionsDlt = { setChapsDlted }
                            indicator = {"chapter"}
            />
        </div>
        <div className = "position-absolute bottom-0 text-center w-100 px-3">
        <button 
            className = "mb-3 saveNtbk list-group-item w-100 d-flex align-items-center justify-content-center text-center "
            type = "submit"
            onClick = {
                (e) => {
                    e.preventDefault();
                    setChapAlteredCount(() => chapAlteredCount + 1);
                    setDropdown(() => dropdown);
                    chaps.saveChaps(newChaps);
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