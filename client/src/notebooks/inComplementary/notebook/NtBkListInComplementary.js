import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom"
import { ntbks, chaps } from "../../../utils/localStorage/notebooks";
import { ntbkSelectedUrl } from "../../../utils/localStorage/urls";
import { Switch } from "../../../utils/icons/complementary/Complementary";
import { login } from "../../../utils/localStorage/accounts";


export default function NtBkList(props) {
    const {
        ntbkSelected,
        setNtbkSelected, 
        chapSelected, 
        setChapSelected, 
        displayNav, 
        setDisplayNav, 
        displayCom, 
        setDisplayCom, 
        optionBarUrl,
        setOptionBarUrl,
        ntbkStyle,
        setNtbkStyle 
    } = props
    const [ switchNtbk, setSwitchNtbk ] = useState(false);

    const notebooks = ntbks.getNtbks().filter((ntbk,idx) => ntbk.userId === login.getId());
    // console.log(notebooks)
    const ntbkToDisplay = ntbkSelected ? ntbkSelected : ntbks.getNtbkSelected()
    const unchosenNtbks = notebooks.filter((ntbk, idx) => ntbkToDisplay ? ntbk.id !== ntbkToDisplay.id : ntbk.id);
    //we can use Link or history.push over here. The difference is with Link, dont put/ in front of url, history.push you need to put "/" in front of url
    // const dropdownNtBkList = notebooks.map((ntbk,idx) => (
    // console.log()
    const dropdownNtbkList = unchosenNtbks.map((ntbk,idx) => (
        <li className = "list-group-item bg-transparent p-0 m-0">
        <Link   className = "link" 
                    to = {`notebooks/${ntbk.title.replaceAll(" ","-")}`} 
                    // to = {`${ntbk.title.replaceAll(" ","-")}`} 
                    >            
            <button     className = "ntbkDropdown bg-transparent list-group-item w-100 text-start"
                        onClick = {(e) => {
                            setNtbkSelected(() => ntbk);
                            setChapSelected(() => null);
                            setSwitchNtbk(() => !switchNtbk);
                            ntbks.saveNtbkSelected(ntbk);
                            chaps.dltChapSelected();
                            ntbkSelectedUrl.saveUrl(`notebooks/${ntbk.title.replaceAll(" ","-")}`)
                        }}
            > 
                <span style = {{fontSize : "15px"}} className = "text-white"> {ntbk.title} </span>
            </button>
            </Link>
        </li>
    ))

    window.addEventListener("click",({target}) => {
        const targetId= target.id
        if (targetId !== "switchNtbk") 
        return setSwitchNtbk(() => false)
    }) 

    return (
        <>
        <div>
                <ul className = "list-group"> 
                <li className = "list-group-item bg-transparent py-1 d-flex align-items-center justify-content-between" 
            
                    > 
                    <div className = "d-flex align-items-center py-1"> 
                    <h5 className = "d-flex align-items-center m-0"> {
                    ntbkToDisplay
                    ? <span className = "fs-6"> { ntbkToDisplay.title }</span>
                    : <span className= "fs-6 "> Notebooks </span>
                    } 
                    </h5>
                    
                    </div >
                    {
                        unchosenNtbks.length !== 0 &&
                        <button className = "ntbkBtn"  
                            
                        id = "switchNtbk"
                        onClick = {(e) => setSwitchNtbk(() => !switchNtbk)}
                >  
   
                <Switch 
                    switchNtbk = { switchNtbk }
                    setSwitchNtbk = { switchNtbk }
                />
                </button>       
                    }  
   
                </li>
                </ul>
                {
                    switchNtbk
                    ?   
                        <ul className = "list-group dropdownNtbkListBox ">
                            {dropdownNtbkList}
                        </ul>    
                    
                    :   null
                }
        {/* <Outlet /> */}
        </div>
        </>
    )

}