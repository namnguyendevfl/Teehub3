import React from "react";
import { useNavigate } from "react-router";

export default function Nav({setNtBkSelected, setChapSelected}) {
    const options = ['Notebooks', 'Flashcards', 'Practice', 'Practice', 'Practice','Practice','Practice','Practice','Practice','Practice', 'Practice', 'Practice','Practice','Practice', 'Practice', 'Practice']
    const navigate = useNavigate();
    const menuList = options.map((option, idx) => {
        const handleClick = (e) => {
            setNtBkSelected (() => null)
            setChapSelected (() => null)
            // window.localStorage.setItem('notebooks', JSON.stringify([]))
            // when click on the left menu, it's gonna push to the url bellow
            switch (option) {
                case "Notebooks":  navigate.push("/notebooks") 
                    break;
                case "Flashcards":  navigate.push("/flashcards")
                    break;
                case "Practice":  navigate.push("/practice")
                    break;  
                default: navigate.push("/home")
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