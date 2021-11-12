import React from "react";
import { complementary } from "../../../../utils/icons/complementary/Complementary";
export default function BasicOptions(props) {
    const {
        setOption, 
        setDropdown,     
    } = props
    const handleClick = ({target}) => {
        setOption(() => target.id);
        setDropdown(() => true);      
    }
    return (
        <>
            <div className = "ms-1 ntbkBtn mt-1" >
                <button className = "p-0 ntbkBtn" id = "search" onClick = {handleClick} >
                    {complementary.search()}
                </button>
            </div>                       
            <div className = "ms-1 ntbkBtn mt-1">
                <button className = "p-0 ntbkBtn" id = "add" onClick = {handleClick}    >
                    {complementary.plus()} 
                </button>
            </div>                   
            <div className = "ms-1 ntbkBtn mt-1">
                <button className = "p-0 ntbkBtn" id= "trash" onClick = {handleClick} >
                    {complementary.trash()}
                </button>
            </div>                   
            <div className = "ms-1 ntbkBtn mt-1">
                <button className = "p-0 ntbkBtn" id = "list" onClick = {handleClick} > 
                    {complementary.list()}
                </button>
            </div>                          
            <div className = "ms-1 ntbkBtn mt-1">
                <button className = "p-0 ntbkBtn" id = "more" onClick = {handleClick} >
                    {complementary.threeDot()}
                </button>
            </div>
        </>
    )

}