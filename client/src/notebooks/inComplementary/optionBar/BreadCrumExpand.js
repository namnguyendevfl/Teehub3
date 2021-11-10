import React, { useState } from "react";
import { hideCom, minNtbkCom } from "../../../utils/localStorage/complementary";
import { navOptions } from "../../../utils/localStorage/navOptions";
import { expand, ntbkComStyle } from "../../../utils/localStorage/notebooks";
import { CaretDown, complementary } from "../../../utils/icons/complementary/Complementary";
import { main } from "../../../utils/icons/main/main";


export default function BreadCrumExpand(props) {
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
        setOption, 
        option,
        dropdown,
        setDropdown,  
        displayBar, 
        setDisplayBar,
        ntbkExpand,
        setNtbkExpand,      
        navOption,
        setNavOption,   
        ntbkStyle,
        setNtbkStyle       
    } = props
    const handleClick = ({target}) => {
        setOption(() => target.id);
        setDropdown(() => true);      
    }
    const [ btnBg, setBtnBg ] = useState({background:"none"})
    const [ style, setStyle ] = useState({display: 'none'})

    const handleMouseEnter = (e) => {
        setStyle({display: 'flex'});
        setBtnBg({background:"#e9ecef"})       
    } 

    const handleMouseLeave = (e) => {
        setStyle({display: 'none'});                        
        setBtnBg({background:"none"})         
    }

    const handleExpand = (e) => {
        setDisplayCom(() => !displayCom);
        setNtbkExpand(() => true);
        const ntbkStyle = {
            color:"black", 
            boxShadow:"none", 
            background:"none", 
            width:"260px"
        }
        setNtbkStyle(() => ntbkStyle);
        hideCom.saveHideCom(!displayCom);
        minNtbkCom.saveMin(true)
        ntbkComStyle.saveStyle(ntbkStyle)
        }
    return (
        <>
        <div    className = "optionBar d-flex align-items-center justify-content-center" >
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
                <button className = "p-0 ntbkBtn" id = "edit" onClick = {handleClick} > 
                    {complementary.edit()}
                </button>
            </div>                          
            <div className = "ms-1 ntbkBtn mt-1">
                <button className = "p-0 ntbkBtn" id = "more" onClick = {handleClick} >
                    {complementary.threeDot()}
                </button>
            </div>

        </div> 
        <div    className = "ntbkExpandToRight p-0 mt-1" onMouseEnter = {(e) => handleMouseEnter(e)}  onMouseLeave = {(e) => handleMouseLeave(e)} >                          
            <div    className = "ntbkBtnExpandToRightBg p-0" style = {btnBg} >                   
                <button className = "ntbkBtnExpandToRight p-0" style = {style} id = "more"                                                              
                    onClick = {(e) => handleExpand(e)}
                > 
                {main.rightChevron()}
                </button>
            </div>                         
        </div>    
        </>
    )

}