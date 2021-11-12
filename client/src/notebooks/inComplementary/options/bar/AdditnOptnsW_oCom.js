import React, { useState } from "react";
import { complementary } from "../../../../utils/icons/complementary/Complementary";
import { main } from "../../../../utils/icons/main/main";
import { hideCom, minNtbkCom } from "../../../../utils/localStorage/complementary";
import { ntbkCom } from "../../../../utils/localStorage/notebooks";


export default function AdditnOptnsW_oCom(props) {
    const {
        chapSelected, 
        displayCom, 
        setDisplayCom,
        setNtbkStyle, 
        ntbkEdit,
        setNtbkEdit,
        maxOptionBox,   
        setMaxOptionBox,
        btnStyle,
        setBtnStyle   
    } = props
    const btnStyleAfterEdit = ntbkEdit ? {display: 'flex'} : btnStyle
    const handleMouseEnter = (e) => {
        setBtnStyle({display: 'flex'});  
    } 

    const handleMouseLeave = (e) => {
        setBtnStyle({display: 'none'})                             
    }
    const handleMaximizeOptnBox = (e) =>  {
        minNtbkCom.saveMin(!maxOptionBox);
        setMaxOptionBox(() => !maxOptionBox);
        const newStyle = {
            background:"white", 
            width:"260px",
            boxShadow: "0px 1px 7px 4px lightgrey"    
        };
        setNtbkStyle(() => newStyle); 
        ntbkCom.saveStyle(newStyle);     
    }
    const handleOpenCom = () => {
        setDisplayCom(() => !displayCom);
        setMaxOptionBox(() => false)
        const newStyle = {
            width: "inherit",
            backgroundColor: "#e9ecef", 
        }
        setNtbkStyle(() => newStyle);
        hideCom.saveHideCom(!displayCom);
        minNtbkCom.saveMin(false);
        ntbkCom.saveStyle(newStyle)
    }

    return ( chapSelected && !maxOptionBox &&
    <div className = "optionBarExpand d-flex align-items-center justify-content-end">
        <div className = "ms-1 offsetNtbkBtn mt-1" onMouseEnter = {(e) => handleMouseEnter(e)}  onMouseLeave = {(e) => handleMouseLeave(e)} > 
            <div className = "ntbkEscapeFromExpand p-0">  </div>                                                        
            <div className = "ntbkBtnExpandToRightBg" >
                <button className = "p-0 ntbkBtnExpandToRight" 
                    style = {btnStyleAfterEdit}
                    onClick = {(e) => {
                        setNtbkEdit(() => !ntbkEdit)
                    }} >
                    {!ntbkEdit ? complementary.edit() : complementary.escape()}
                </button>
            </div>
        </div>                
        { 
            !ntbkEdit &&
                <div className = "ms-1 offsetNtbkBtn mt-1" onMouseEnter = {(e) => handleMouseEnter(e)}  onMouseLeave = {(e) => handleMouseLeave(e)} > 
                    <div className = "ntbkEscapeFromExpand p-0">  </div>                                                        
                    <div className = "ntbkBtnExpandToRightBg" >
                        <button className = "p-0 ntbkBtnExpandToRight" 
                            style = {btnStyle} 
                            onClick = {(e) => handleMaximizeOptnBox(e)} >
                            {complementary.boxArrowDownLeft()}
                        </button>
                    </div>
                </div>
        }
        <div className = "ms-1 me-2 offsetNtbkBtn mt-1" onMouseEnter = {(e) => handleMouseEnter(e)}  onMouseLeave = {(e) => handleMouseLeave(e)} > 
            <div className = "ntbkEscapeFromExpand p-0">  </div>                                                        
            <div className = "ntbkBtnExpandToRightBg" 
            >
                <button className = "p-0 ntbkBtnExpandToRight" 
                    style = {btnStyleAfterEdit} 
                    onClick = {(e) => handleOpenCom(e)}              
                > 
                    {main.leftChevron()}
                </button>
            </div>
        </div>
    </div>
    )

}