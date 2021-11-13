import React, { useState } from "react";
import { hideCom, minNtbkCom } from "../../../../utils/localStorage/complementary";
import { ntbkCom } from "../../../../utils/localStorage/notebooks";
import MinOptnBarW_oCom from "./MinOptnBarW_oCom";
import MaxOptnBarW_oCom from "./MaxOptnBarW_oCom";

export default function OptionBarW_outCom(props) {
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
    const [ btnStyle, setBtnStyle ] = useState({display: 'none'})
    return ( !displayCom && chapSelected &&
        <>
        <MaxOptnBarW_oCom 
            chapSelected = {chapSelected} 
            displayCom = {displayCom}
            setDisplayCom = {setDisplayCom}
            setNtbkStyle = {setNtbkStyle}
            ntbkEdit = {ntbkEdit}
            setNtbkEdit = {setNtbkEdit}
            maxOptionBox = {maxOptionBox}   
            setMaxOptionBox = {setMaxOptionBox}
            btnStyle = {btnStyle}
            setBtnStyle = {setBtnStyle}
            dropdown = {dropdown}
            setDropdown = {setDropdown}
            option = {option}
            setOption = {setOption}
        />         
        <MinOptnBarW_oCom
            chapSelected = {chapSelected} 
            displayCom = {displayCom}
            setDisplayCom = {setDisplayCom}
            setNtbkStyle = {setNtbkStyle}
            ntbkEdit = {ntbkEdit}
            setNtbkEdit = {setNtbkEdit}
            maxOptionBox = {maxOptionBox}   
            setMaxOptionBox = {setMaxOptionBox}
            btnStyle = {btnStyle}
            setBtnStyle = {setBtnStyle}
        />
    </>
    )
}