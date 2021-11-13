import React from "react";
import AdditnOptnsWCom from "./AdditnOptnsWCom";
import BasicOptions from "./BasicOptions";

export default function OptionBarWithCom(props) {
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
        setOption               
    } = props
    return ( displayCom &&
        <>
        <div className = "d-flex align-items-center justify-content-center" >
            <BasicOptions     
                option = {option} 
                setOption = {setOption}           
                dropdown = {dropdown}
                setDropdown = { setDropdown } />
        </div> 
        <AdditnOptnsWCom 
            chapSelected = {chapSelected} 
            displayCom = {displayCom}
            setDisplayCom = {setDisplayCom}
            setNtbkStyle = {setNtbkStyle}
            ntbkEdit = {ntbkEdit}
            setNtbkEdit = {setNtbkEdit}
            maxOptionBox = {maxOptionBox}   
            setMaxOptionBox = {setMaxOptionBox} 
            dropdown = {dropdown}
            setDropdown = {setDropdown}   
            />
        </>
    )

}