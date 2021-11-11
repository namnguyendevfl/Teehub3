import React, { useState } from "react"
import { ntbks } from "../../../utils/localStorage/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";

export default function AddNtbk(props){
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

    let userIdLogin = window.localStorage.getItem('userId');
    userIdLogin= JSON.parse(userIdLogin);

    const initialNoteBook = {
        userId : "",
        title: "",
        id : "",
    }
    
    const [ newNtbk, setNewNtbk ] = useState(initialNoteBook);
    const notebooks = ntbks.getNtbks();
    const notebookIds = notebooks.map((notebook, idx) => notebook.id)
    const maxId = Math.max(...notebookIds)
    const handleChange = ({target: { name, value }}) => {
        const id = (() => {
            if (maxId > notebooks.length){
                for (let i = 1 ; i < maxId; i++){
                    if (!notebookIds.includes(i))
                    return i
                }
            } else return notebooks.length + 1
        })() 
        setNewNtbk((prevNtbk) => ({
            ...prevNtbk,
            [name]: value,
            id: id
        }))
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        setNtbkAlteredCount(() => ntbkAlteredCount + 1)
        notebooks.push(newNtbk);
        setDropdown(() => !dropdown)
        ntbks.saveNtbks(notebooks);
    };

    return (
        <>    
    <div className="row d-flex text-aligns-center m-0 justify-content-center">    
        <div className = "col-2"></div>
        <h5 className = "col-8 text-center text-dark m-0 optionBoxBarText">Create notebook</h5>
        <div className = "col-2 m-0 d-flex align-items-center justify-content-end">
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
                placeholder = "Write a notebook title"
                value = {newNtbk.title}
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
                            // setDisplayAddOption (() => !displayAddOption);
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
            </button>
        </div>
    </form>
</>
    )
}