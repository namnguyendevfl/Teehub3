import React from "react";
import { useNavigate } from "react-router";
import { minNtbkCom } from "../utils/localStorage/complementary";
import { navOptions } from "../utils/localStorage/navOptions";
import { chaps, ntbks } from "../utils/localStorage/notebooks";

export default function Nav(props) {
    const {
        ntbkSelected,
        setNtbkSelected, 
        chapSelected, 
        setChapSelected, 
        displayNav, 
        setDisplayNav, 
        displayCom, 
        setDisplayCom,    
        navOption,
        setNavOption
    } = props    
    // const options = ['Notebooks', 'Flashcards', 'Practice', 'Practice', 'Practice','Practice','Practice','Practice','Practice','Practice', 'Practice', 'Practice','Practice','Practice', 'Practice', 'Practice']
    const options = ['Notebooks', 'Flashcards', 'Practice', 'Storage']
    const navigate = useNavigate();
    const menuList = options.map((option, idx) => {
        const handleClick = (e) => {
            setNtbkSelected (() => null);
            setChapSelected (() => null);
            ntbks.dltNtbkSelected();
            chaps.dltChapSelected();
            setNavOption(() => option);
            navOptions.saveNav(option);
            // minNtbkCom.saveMin(true);
            // window.localStorage.setItem('notebooks', JSON.stringify([]))
            // when click on the left menu, it's gonna push to the url bellow
            switch (option) {
                case "Notebooks":  navigate("/notebooks") 
                    break;
                case "Flashcards":  navigate("/flashcards")
                    break;
                case "Practice":  navigate("/practice")
                    break;  
                default: navigate("/home")
                    break;
            }
        }
        return(
        <li className = "list-group-item m-0 p-0">
            <button className = "list-group-item w-100 text-start"
                    onClick = {handleClick}
            >
                <span className = "text-start w-100"> {option} </span>
            </button>
        </li>
    )})
    return (
        <ul className = "list-group"
        >
            {menuList}
        </ul>
    )
}