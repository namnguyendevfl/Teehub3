import React, { useState } from "react"
import TextareaAutosize from "react-autosize-textarea"
import { ntbks } from "../../../utils/localStorage/notebooks";
import { complementary } from "../../../utils/icons/complementary/Complementary";
import { login } from "../../../utils/localStorage/accounts";
import { createNtbk } from "../../../utils/api/notebooks";
import Errors from "../../../errors/errors";
import { useNavigate } from "react-router-dom"

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

    const initialNoteBook = {
        // user_id:"",
        ntbk_title: "",
        ntbk_id : "",
    }
    const [ error, setError ] = useState(null)
    const [ newNtbk, setNewNtbk ] = useState(initialNoteBook);
    const notebooks = ntbks.getNtbks();
    const notebookIds = notebooks.map((notebook, idx) => notebook.ntbk_id)
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
            user_id: login.getLoggedIn().user_id,
            ntbk_id: id
        }))
    }
    
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        createNtbk(newNtbk)
        .then(() => {
            setDropdown(() => !dropdown)
            setNtbkAlteredCount(() => ntbkAlteredCount + 1)
            navigate("/notebooks")
            // notebooks.push(newNtbk);
            // ntbks.saveNtbks(notebooks);
        })
        .catch(setError)
        // setNtbkAlteredCount(() => ntbkAlteredCount + 1)
        // notebooks.push(newNtbk);
        // setDropdown(() => !dropdown)
        // ntbks.saveNtbks(notebooks);
    };
    return (
        <>    
    <Errors error = {error} />
    <div className="row d-flex text-aligns-center m-0 justify-content-center">    
        <div className = "col-2"></div>
        <h5 className = "ntbkOptnBoxTitle col-8 text-center text-dark m-0">Create notebook</h5>
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
            <div>
                <TextareaAutosize
                    className = "textarea ntbkTextarea w-100 px-3 pt-2 text-start w-100"
                    id = "ntbk_title"
                    name = "ntbk_title"
                    placeholder = "Write a notebook title"
                    value = {newNtbk.ntbk_title}
                    onChange = {handleChange}
                />
            </div>   
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
                className = "saveNtbk mb-3 list-group-item w-100 d-flex align-items-center justify-content-center text-center"
                type = "submit"
                >
                Save
            </button>
        </div>
    </form>
</>
    )
}