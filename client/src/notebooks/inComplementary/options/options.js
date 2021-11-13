import React, { useState } from "react";
import OptionBarWithCom from "./bar/OptionBarWithCom";
import OptionBarW_outCom from "./bar/OptionBarW_outCom";
import Add from "./options/Add";
import Dlt from "./options/Dlt";
import Edit from "./options/Edit";
import More from "./options/More";

export default function Options(props) {
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
        displayBar, 
        setDisplayBar,
        navOption,
        setNavOption,
        ntbkStyle,
        setNtbkStyle,
        ntbkTextStyle,
        setNtbkTextStyle, 
        ntbkEdit,
        setNtbkEdit,
        maxOptionBox,  
        setMaxOptionBox
    } = props
    
    const [ dropdown, setDropdown ] = useState(false);
    const [ option, setOption] = useState(false);
    const optionBoxStyle = (() => {
        if (displayCom) return {
            right: "10px"
        }
        return {
            right: "0px",
            top:"42px"
        }
    })()

    const displayOption = (option) => {
        switch (option) {
            case "add":
                //We have to return it => remember
                return <Add 
                    option = {option} 
                    ntbkSelected = {ntbkSelected}
                    setNtbkSelected = {setNtbkSelected}
                    ntbkAlteredCount = {ntbkAlteredCount} 
                    setNtbkAlteredCount = {setNtbkAlteredCount}  
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    chapAlteredCount = {chapAlteredCount}
                    setChapAlteredCount = {setChapAlteredCount}
                    topicAlteredCount = {topicAlteredCount}
                    setTopicAlteredCount = {setTopicAlteredCount}
                    displayNav = {displayNav}
                    setDisplayNav = {setDisplayNav}
                    displayCom = {displayCom}
                    setDisplayCom = {setDisplayCom} 
                    dropdown = {dropdown}
                    setDropdown = { setDropdown }     
                />

            case "trash":
                return <Dlt option = {option} 
                    ntbkSelected = {ntbkSelected}
                    setNtbkSelected = {setNtbkSelected}
                    ntbkAlteredCount = {ntbkAlteredCount} 
                    setNtbkAlteredCount = {setNtbkAlteredCount}  
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    chapAlteredCount = {chapAlteredCount}
                    setChapAlteredCount = {setChapAlteredCount}
                    topicAlteredCount = {topicAlteredCount}
                    setTopicAlteredCount = {setTopicAlteredCount}
                    displayNav = {displayNav}
                    setDisplayNav = {setDisplayNav}
                    displayCom = {displayCom}
                    setDisplayCom = {setDisplayCom} 
                    dropdown = {dropdown}
                    setDropdown = { setDropdown }    
                    />
            
            case "list":
                return <Edit 
                    option = {option} 
                    ntbkSelected = {ntbkSelected}
                    setNtbkSelected = {setNtbkSelected}
                    ntbkAlteredCount = {ntbkAlteredCount} 
                    setNtbkAlteredCount = {setNtbkAlteredCount}  
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    chapAlteredCount = {chapAlteredCount}
                    setChapAlteredCount = {setChapAlteredCount}
                    topicAlteredCount = {topicAlteredCount}
                    setTopicAlteredCount = {setTopicAlteredCount}
                    displayNav = {displayNav}
                    setDisplayNav = {setDisplayNav}
                    displayCom = {displayCom}
                    setDisplayCom = {setDisplayCom} 
                    dropdown = {dropdown}
                    setDropdown = { setDropdown }
                    />  
            case "more":
                return <More
                    option = {option} 
                    ntbkSelected = {ntbkSelected}
                    setNtbkSelected = {setNtbkSelected}
                    ntbkAlteredCount = {ntbkAlteredCount} 
                    setNtbkAlteredCount = {setNtbkAlteredCount}  
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    chapAlteredCount = {chapAlteredCount}
                    setChapAlteredCount = {setChapAlteredCount}
                    topicAlteredCount = {topicAlteredCount}
                    setTopicAlteredCount = {setTopicAlteredCount}
                    displayNav = {displayNav}
                    setDisplayNav = {setDisplayNav}
                    displayCom = {displayCom}
                    setDisplayCom = {setDisplayCom} 
                    dropdown = {dropdown}
                    setDropdown = { setDropdown }
                    />                     
        }
    }
    return (
        <> 
        <div className = "position-relative">
        <OptionBarWithCom 
            option = {option} 
            setOption = {setOption}
            ntbkSelected = {ntbkSelected}
            setNtbkSelected = {setNtbkSelected}
            ntbkAlteredCount = {ntbkAlteredCount} 
            setNtbkAlteredCount = {setNtbkAlteredCount}  
            chapSelected = {chapSelected}
            setChapSelected = {setChapSelected}
            chapAlteredCount = {chapAlteredCount}
            setChapAlteredCount = {setChapAlteredCount}
            topicAlteredCount = {topicAlteredCount}
            setTopicAlteredCount = {setTopicAlteredCount}
            displayNav = {displayNav}
            setDisplayNav = {setDisplayNav}
            displayCom = {displayCom}
            setDisplayCom = {setDisplayCom} 
            dropdown = {dropdown}
            setDropdown = { setDropdown } 
            displayBar = {displayBar}
            setDisplayBar = {setDisplayBar}
            navOption = {navOption}
            setNavOption = {setNavOption}  
            ntbkStyle = { ntbkStyle }
            setNtbkStyle = { setNtbkStyle }  
            ntbkTextStyle = { ntbkTextStyle}
            setNtbkTextStyle = {setNtbkTextStyle}
            ntbkEdit = {ntbkEdit}
            setNtbkEdit = {setNtbkEdit} 
            maxOptionBox = {maxOptionBox}     
            setMaxOptionBox = {setMaxOptionBox}    
            />
        <OptionBarW_outCom option = {option} 
                setOption = {setOption}
                ntbkSelected = {ntbkSelected}
                setNtbkSelected = {setNtbkSelected}
                ntbkAlteredCount = {ntbkAlteredCount} 
                setNtbkAlteredCount = {setNtbkAlteredCount}  
                chapSelected = {chapSelected}
                setChapSelected = {setChapSelected}
                chapAlteredCount = {chapAlteredCount}
                setChapAlteredCount = {setChapAlteredCount}
                topicAlteredCount = {topicAlteredCount}
                setTopicAlteredCount = {setTopicAlteredCount}
                displayNav = {displayNav}
                setDisplayNav = {setDisplayNav}
                displayCom = {displayCom}
                setDisplayCom = {setDisplayCom} 
                dropdown = {dropdown}
                setDropdown = { setDropdown } 
                displayBar = {displayBar}
                setDisplayBar = {setDisplayBar}
                navOption = {navOption}
                setNavOption = {setNavOption}
                ntbkStyle = { ntbkStyle }
                setNtbkStyle = { setNtbkStyle } 
                ntbkTextStyle = { ntbkTextStyle}
                setNtbkTextStyle = {setNtbkTextStyle} 
                ntbkEdit = {ntbkEdit}
                setNtbkEdit = {setNtbkEdit}  
                maxOptionBox = {maxOptionBox}     
                setMaxOptionBox = {setMaxOptionBox}   
            />
            {
                option && dropdown &&
                <div className = "optionNtbkBox bg-white container-fluid m-0 p-0"
                    style = {optionBoxStyle }
                    >
                    {displayOption(option)}
                </div>
            }
        </div>
        
        </>
    )
}