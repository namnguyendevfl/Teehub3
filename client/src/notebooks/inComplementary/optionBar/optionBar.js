import React, { useState } from "react";
import BreadCrumExpand from "./BreadCrumExpand";
import BreadCrumNonExpand from "./BreadCrumNonExpand";
import Add from "./options/Add";
import Dlt from "./options/Dlt";
import Edit from "./options/Edit";

export default function OptionBar(props) {
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
        ntbkExpand, 
        setNtbkExpand,
        navOption,
        setNavOption,
        ntbkStyle,
        setNtbkStyle,
        ntbkTextStyle,
        setNtbkTextStyle,   
    } = props
    
    const [ dropdown, setDropdown ] = useState(false);
    const [ option, setOption] = useState(false);
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
            
            case "edit":
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
        }
    }
    return (
        <> 
        <div className = "position-relative">
            {
                displayCom
                ? <BreadCrumExpand option = {option} 
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
                ntbkExpand = {ntbkExpand}
                setNtbkExpand = {setNtbkExpand} 
                navOption = {navOption}
                setNavOption = {setNavOption}  
                ntbkStyle = { ntbkStyle }
                setNtbkStyle = { setNtbkStyle }  
                ntbkTextStyle = { ntbkTextStyle}
                setNtbkTextStyle = {setNtbkTextStyle}  
            />
                : <BreadCrumNonExpand option = {option} 
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
                ntbkExpand = {ntbkExpand}
                setNtbkExpand = {setNtbkExpand} 
                navOption = {navOption}
                setNavOption = {setNavOption}
                ntbkStyle = { ntbkStyle }
                setNtbkStyle = { setNtbkStyle } 
                ntbkTextStyle = { ntbkTextStyle}
                setNtbkTextStyle = {setNtbkTextStyle}     
            />
            }
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