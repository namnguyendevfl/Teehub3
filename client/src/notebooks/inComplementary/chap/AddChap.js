import React, { useState } from "react"
import { useNavigate } from "react-router";
import { chaps } from "../../../utils/data/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";

export default function AddChapter(props){
    const {
        option,
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayNav, 
        setDisplayNav, 
        displayCom, 
        setDisplayCom, 
        optionBarUrl,
        setOptionBarUrl,
        dropdown, 
        setDropdown,
        displayAddOption,
        setDisplayAddOption,
    } = props
    const { userId = " ", id = " "} = ntBkSelected || ""
    const initChap = {
        id: "",
        title: "",
        content:"",
    }
    const [newChap, setNewChap] = useState(initChap);

    const originalChapters = chaps.getChapList();
    let selectedChapters = originalChapters.filter((chapter, idx) => (ntBkSelected) && chapter.bookId === ntBkSelected.id)
    selectedChapters = selectedChapters.sort((chapterA, chapterB) => chapterA.id - chapterB.id)
    //becareful string and number over here
    const handleChange = ({ target: {name, value}}) => {
        setNewChap((prevChap) => ({
            ...prevChap,
            [name]: value,
            userId: userId,
            bookId: id,
            id: selectedChapters.length + 1
        }))
    };

    let notebookUrl = window.localStorage.getItem('notebookUrl');
    notebookUrl = JSON.parse(notebookUrl);

    const navigate = useNavigate();  
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`${notebookUrl}`);
        originalChapters.push(newChap);
        setDropdown(() => !dropdown)
        chaps.saveChapList(originalChapters)
    };

    return (
        <>
            
    <div className="row d-flex text-aligns-center m-0 justify-content-center">    
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
                        setDisplayAddOption (() => !displayAddOption);
                        // setOrderDropdown(() => !orderDropdown)
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