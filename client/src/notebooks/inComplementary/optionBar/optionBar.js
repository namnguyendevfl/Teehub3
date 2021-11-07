import React, { useState } from "react";
import BreadCrum from "./breadCrum";
import Add from "./options/Add";
import Dlt from "./options/Dlt";
import Edit from "./options/Edit";

export default function OptionBar(props) {
    const {
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayNav, 
        setDisplayNav, 
        displayCom, 
        setDisplayCom, 
        optionBarUrl,
        setOptionBarUrl 
    } = props
     
    const [ dropdown, setDropdown ] = useState(false);
    const [ option, setOption] = useState(false);
    const displayOption = (option) => {
        switch (option) {
            case "add":
                //We have to return it => remember
                return <Add 
                    option = {option} 
                    ntBkSelected = {ntBkSelected}
                    setNtBkSelected = {setNtBkSelected}
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    displayNav = {displayNav}
                    setDisplayNav = {setDisplayNav}
                    displayCom = {displayCom}
                    setDisplayCom = {setDisplayCom}         
                    optionBarUrl = {optionBarUrl}
                    setOptionBarUrl = {setOptionBarUrl} 
                    dropdown = {dropdown}
                    setDropdown = { setDropdown }     
                />

            case "trash":
                return <Dlt option = {option} 
                    ntBkSelected = {ntBkSelected}
                    setNtBkSelected = {setNtBkSelected}
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    displayNav = {displayNav}
                    setDisplayNav = {setDisplayNav}
                    displayCom = {displayCom}
                    setDisplayCom = {setDisplayCom} 
                    optionBarUrl = {optionBarUrl}
                    setOptionBarUrl = {setOptionBarUrl} 
                    dropdown = {dropdown}
                    setDropdown = { setDropdown }     
                    />
            
            case "edit":
                return <Edit option = {option} 
                    ntBkSelected = {ntBkSelected}
                    setNtBkSelected = {setNtBkSelected}
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    displayNav = {displayNav}
                    setDisplayNav = {setDisplayNav}
                    displayCom = {displayCom}
                    setDisplayCom = {setDisplayCom} 
                    optionBarUrl = {optionBarUrl}
                    setOptionBarUrl = {setOptionBarUrl} 
                    dropdown = {dropdown}
                    setDropdown = { setDropdown }     
                    />                 
        }
    }
    return (
        <> 
        <div className = "position-relative">
            <BreadCrum 
            option = {option}
            setOption = {setOption}
            setDropdown = {setDropdown}
            dropdown = { dropdown }
            />
            {
                option && dropdown &&
                /* option box has to have bg-white */
                <div className = "optionBox bg-white container-fluid m-0 p-0">
                    {displayOption(option)}
                </div>
            }
        </div>
        
        </>
    )
}