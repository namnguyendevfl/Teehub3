import React from "react";
import { complementary } from "../../../utils/icons/complementary/Complementary";


export default function BreadCrum({option, setOption, dropdown, setDropdown}) {
    const handleClick = ({target}) => {
        setOption(() => target.id);
        setDropdown(() => true);      
    }
    return (
       
        <>
        <div className = "optionBar d-flex align-items-center justify-content-center">
            <div className = "ms-1 ntbkBtn">
                <button className = "p-0 ntbkBtn"
                        id = "search"
                        onClick = {handleClick}
                > 
                {complementary.search()}
            </button>
            </div>
        
        <div className = "ms-1 ntbkBtn">
            <button className = "p-0 ntbkBtn"
                    id = "add"
                    onClick = {handleClick}                 
            >
                 {complementary.plus()} 
            </button>
        </div>

        <div className = "ms-1 ntbkBtn">
            <button className = "p-0 ntbkBtn"
                    id= "trash"
                    onClick = {handleClick}
            > 
                {complementary.trash()}
            </button>
        </div>

        <div className = "ms-1 ntbkBtn">
            <button className = "p-0 ntbkBtn"
                    id = "edit"
                    onClick = {handleClick}
            > 
                {complementary.edit()}
            </button>
        </div>

        <div className = "ms-1 ntbkBtn">
                <button className = "p-0 ntbkBtn"
                    id = "more"
                    onClick = {handleClick}
            > 
                {complementary.threeDot()}
            </button>
        </div>
        
        </div>
    </>
    )

}