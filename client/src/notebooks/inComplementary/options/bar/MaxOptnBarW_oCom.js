import React, { useState } from "react";
import { complementary } from "../../../../utils/icons/complementary/Complementary";
import { main } from "../../../../utils/icons/main/main";
import { hideCom, minNtbkCom } from "../../../../utils/localStorage/complementary";
import { ntbkCom } from "../../../../utils/localStorage/notebooks";
import AdditnOptnsW_oCom from "./MinOptnBarW_oCom";
import BasicOptions from "./BasicOptions";

export default function MaxOptnBarW_oCom(props) {
    const {
        chapSelected,
        displayCom, 
        setDisplayCom,
        setNtbkStyle,
        ntbkEdit,
        setNtbkEdit, 
        maxOptionBox,   
        setMaxOptionBox,
        dropdown, 
        setDropdown, 
        option,
        setOption,
        btnStyle,
        setBtnStyle           
    } = props
    const handleMinimizeOptnBox = (e) =>  {
        setDropdown(() => false)
        setBtnStyle({display:"flex"})
        minNtbkCom.saveMin(!maxOptionBox);
        setMaxOptionBox(() => !maxOptionBox);
        const newStyle = {
            background:"none",
            width:"260px"
        }
        setNtbkStyle(newStyle)
        ntbkCom.saveStyle(newStyle)
    }
    const handleOpenCom = () => {
        setBtnStyle({display:"none"})  
        setDisplayCom(() => !displayCom);
        setMaxOptionBox(() => false)
        setDropdown(() => false)
        const newStyle = {
            width: "inherit",
            backgroundColor: "#e9ecef", 
        }
        setNtbkStyle(() => newStyle);
        hideCom.saveHideCom(!displayCom);
        minNtbkCom.saveMin(false);
        ntbkCom.saveStyle(newStyle)
    }
    return ( 
            maxOptionBox &&
            <>
                <div className = "d-flex align-items-center justify-content-center">
                    <BasicOptions 
                        option = {option} 
                        setOption = {setOption}       
                        dropdown = {dropdown}
                        setDropdown = { setDropdown } 
                    />
                    <div className = "ms-1 ntbkBtn mt-1">
                        <button className = "p-0 ntbkBtn" onClick = {(e) => handleMinimizeOptnBox(e)} >
                            {complementary.boxArrowUpRight()}               
                        </button>
                    </div>
                    <div className = "mx-1 ntbkBtn mt-1" >   
                        <button className = "p-0 ntbkBtn"                               
                            onClick = {(e) => handleOpenCom(e)}
                        > 
                            {main.leftChevron()}
                        </button>
                    </div>
                </div>     
            </>
    )
}