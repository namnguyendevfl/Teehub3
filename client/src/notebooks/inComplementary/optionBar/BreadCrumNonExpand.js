import React, { useState } from "react";
import { complementary } from "../../../utils/icons/complementary/Complementary";
import { main } from "../../../utils/icons/main/main";
import { hideCom, minNtbkCom } from "../../../utils/localStorage/complementary";
import { ntbkComStyle } from "../../../utils/localStorage/notebooks";


export default function BreadCrumNonExpand(props) {
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
    const [ style, setStyle ] = useState({display: 'none'})

    const handleMouseEnter = (e) => {
        setStyle({display: 'flex'});  
    } 

    const handleMouseLeave = (e) => {
        setStyle({display: 'none'})                             
    }
    const handleMaximizeExpand = (e) =>  {
        setNtbkExpand(() => !ntbkExpand);
        minNtbkCom.saveMin(!ntbkExpand);
        const newStyle = {
            background:"white", 
            width:"260px",
            boxShadow: "0px 1px 7px 4px lightgrey"    
        };
        setNtbkStyle(() => newStyle); 
        ntbkComStyle.saveStyle(newStyle);     
    }

    const handleMinimizeExpand = (e) =>  {
        setNtbkExpand(() => !ntbkExpand);
        minNtbkCom.saveMin(!ntbkExpand);
        const newStyle = {
            background:"none",
            width:"260px"
        }
        setNtbkStyle(newStyle)
        ntbkComStyle.saveStyle(newStyle)
    }
    const handleCloseExpand = () => {
        setDisplayCom(() => !displayCom);
        setNtbkExpand(() => false);
        const newStyle = {
            width: "inherit",
            backgroundColor: "#e9ecef", 
        }
        setNtbkStyle(() => newStyle);
        hideCom.saveHideCom(!displayCom);
        minNtbkCom.saveMin(false);
        ntbkComStyle.saveStyle(newStyle)
    }
    return (
        <div className = "optionBarExpand d-flex align-items-center justify-content-center">
            {
            !ntbkExpand 
            ? <>
                <div className = "ms-1 ntbkBtn mt-1" >
                    <button className = "p-0 ntbkBtn"  id = "search" onClick = {handleClick} 
                    // style = {ntbkStyle}
                    >
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
                    <button className = "p-0 ntbkBtn " id = "edit" onClick = {handleClick} > 
                        {complementary.edit()}
                    </button>
                </div>
    
                <div className = "ms-1 ntbkBtn mt-1">
                    <button className = "p-0 ntbkBtn" id = "more" onClick = {handleClick} >
                        {complementary.threeDot()}
                    </button>
                </div>
                <div className = "ms-1 ntbkBtn mt-1">
                    <button className = "p-0 ntbkBtn" id = "boxArrowUpRight" onClick = {(e) => handleMinimizeExpand(e)} >
                        {complementary.boxArrowUpRight()}               
                    </button>
                </div>
                <div className = "mx-1 ntbkBtn mt-1" >   
                    <button className = "p-0 ntbkBtn" id = "ntbkEscapeFromExpan"                                
                        onClick = {(e) => handleCloseExpand(e)}
                    > 
                        {main.leftChevron()}
                    </button>
                </div>
            </>                    
            : <>
                <div className = "ms-1 offsetNtbkBtn"> </div>
                <div className = "ms-1 offsetNtbkBtn"> </div>
                <div className = "ms-1 offsetNtbkBtn"> </div>
                <div className = "ms-1 offsetNtbkBtn"> </div>
                <div className = "ms-1 offsetNtbkBtn"> </div>
                <div className = "ms-1 .offsetNtbkBtn mt-1" onMouseEnter = {(e) => handleMouseEnter(e)}  onMouseLeave = {(e) => handleMouseLeave(e)} > 
                    <div className = "ntbkEscapeFromExpand p-0">  </div>                                                        
                    <div className = "ntbkBtnExpandToRightBg" >
                        <button className = "p-0 ntbkBtnExpandToRight" 
                            style = {style} 
                            id = "more"
                            onClick = {(e) => handleMaximizeExpand(e)} >
                            {complementary.boxArrowDownLeft()}
                        </button>
                    </div>
                </div>
                <div className = "mx-1 .offsetNtbkBtn mt-1" onMouseEnter = {(e) => handleMouseEnter(e)}  onMouseLeave = {(e) => handleMouseLeave(e)} > 
                    <div className = "ntbkEscapeFromExpand p-0">  </div>                                                        
                    <div className = "ntbkBtnExpandToRightBg" 
                    >
                        <button className = "p-0 ntbkBtnExpandToRight" 
                        style = {style} 
                        id = "more"
                        onClick = {(e) => handleCloseExpand(e)}              
                        > 
                            {main.leftChevron()}
                        </button>
                    </div>
                </div>
            </>
            }                                                           
        </div>                 
    )

}