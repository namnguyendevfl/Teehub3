import React, { useState } from "react"
import { useNavigate } from "react-router";
import { chaps } from "../../../utils/localStorage/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";

export default function AddChapter(props){
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
    const { userId = " ", id = " "} = ntbkSelected || ""
    const initChap = {
        id: "",
        title: "",
        content:"",
    }
    const [newChap, setNewChap] = useState(initChap);
    const allChapters = chaps.getChaps();
    const chapters = allChapters.filter((chapter, idx) => (ntbkSelected) && chapter.bookId === ntbkSelected.id)
    const chapterIds = chapters.map((chapter, idx) => chapter.id)
    const maxId = Math.max(...chapterIds)
    const handleChange = ({ target: {name, value}}) => {
        const chapterId = (() => {
            if (maxId > chapters.length){
                for (let i = 1 ; i < maxId; i++){
                    if (!chapterIds.includes(i))
                    return i
                }
            } else return chapters.length + 1
        })() 
        setNewChap((prevChap) => ({
            ...prevChap,
            [name]: value,
            userId: userId,
            bookId: id,
            id: chapterId
        }))
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        allChapters.push(newChap);
        setChapAlteredCount(() => chapAlteredCount + 1);
        setDropdown(() => !dropdown);
        chaps.saveChaps(allChapters);
    };
    return (
        <>
            
    <div className="row d-flex text-aligns-center text-dark m-0 justify-content-center">    
        <div className = "col-2"></div>
        <h5 className = "col-8 text-center m-0 py-3">Create chapter</h5>
        <div className = "col-2 m-0  d-flex align-items-center justify-content-end">
            <button className = "ntbkBtn d-flex align-items-center p-2 "
                    onClick = {(e) => setDropdown (() => !dropdown)}
            >
                {complementary.escape()}
            </button>
        </div>
    </div>
    <hr className =" m-0 p-0"/>

    <form className = ""
    onSubmit = {handleSubmit}>
    <div>

        <input
            className = "list-group-item createInput px-3 text-start w-100"
            id = "title"
            name = "title"
            placeholder = "Write a chapter title"
            value = {newChap.title}
            onChange = {handleChange}
            >
        </input>
    </div>

    <div className = "position-absolute bottom-0 text-center w-100 px-3">
        <div className = "py-1 w-100 d-flex justify-content-between">
            <p className = "m-0 "> Add to your note </p>
            <div>
            <button className = "ntbkBtn d-flex justify-content-center align-items-center"
                    onClick = {(e) => {
                        e.preventDefault();
                    }}
            >
                {complementary.list()}
            </button>

            </div>

        </div>
        <button 
            className = "save mb-3 list-group-item w-100 d-flex align-items-center justify-content-center text-center"
            type = "submit"
            >
            Save
            {/* <Plus /> */}
        </button>
    </div>
</form>
</>
    )
}