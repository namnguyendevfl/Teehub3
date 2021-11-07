import React from "react";
import AddChapter from "../../chap/AddChap";
import AddNtbk from "../../notebook/AddNtbk";

export default function Add(props){
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
        setOptionBarUrl, 
        option,
        dropdown, 
        setDropdown
    } = props

    if (!ntBkSelected) {
        return (
            <>
                <AddNtbk
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
            </>
        )
    }

    if (!chapSelected) {
        return (
            <>
                <AddChapter
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
            </>
        )
    }
    // return (
    //     <>
    //     {/* <div className = "position-absolute"> */}
    //         <AddTopic 
    //             option = {option} 
    //             ntBkSelected = {ntBkSelected}
    //             setNtBkSelected = {setNtBkSelected}
    //             chapSelected = {chapSelected}
    //             setChapSelected = {setChapSelected}
    //             displayLeftMain = {displayLeftMain}
    //             setDisplayLeftMain = {setDisplayLeftMain}
    //             displayRightMain = {displayRightMain}
    //             setDisplayRightMain = {setDisplayRightMain} 
    //             optionBarUrl = {optionBarUrl}
    //             setOptionBarUrl = {setOptionBarUrl}  
    //             dropdown = {dropdown}
    //             setDropdown = { setDropdown }                        
    //             />  
    //     {/* </div> */}
    //     </>
    // )
}