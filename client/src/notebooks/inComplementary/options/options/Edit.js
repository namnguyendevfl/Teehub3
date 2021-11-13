import React from "react";
import EditTopic from "../../topic/editTopic";

export default function Edit(props) {
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
        option,
        dropdown,
        setDropdown,
    } = props
    
    // return (
    //     <>
    //     This is edit
    //     </>
    // )
    
    // if (!ntBkSelected) {
    //     return (
    //         <>
    //             <EditNtBk
    //                 option = {option} 
    //                 ntBkSelected = {ntBkSelected}
    //                 setNtBkSelected = {setNtBkSelected}
    //                 chapSelected = {chapSelected}
    //                 setChapSelected = {setChapSelected}
    //                 displayLeftMain = {displayLeftMain}
    //                 setDisplayLeftMain = {setDisplayLeftMain}
    //                 displayRightMain = {displayRightMain}
    //                 setDisplayRightMain = {setDisplayRightMain} 
    //                 optionBarUrl = {optionBarUrl}
    //                 setOptionBarUrl = {setOptionBarUrl}  
    //                 dropdown = {dropdown}
    //                 setDropdown = { setDropdown }                        
    //                 />
    //         </>
    //     )
    // }

    if (!chapSelected) {
        return (
            <>
                Edit a chapter
                {/* <AddChapter
                    option = {option} 
                    ntBkSelected = {ntBkSelected}
                    setNtBkSelected = {setNtBkSelected}
                    chapSelected = {chapSelected}
                    setChapSelected = {setChapSelected}
                    displayLeftMain = {displayLeftMain}
                    setDisplayLeftMain = {setDisplayLeftMain}
                    displayRightMain = {displayRightMain}
                    setDisplayRightMain = {setDisplayRightMain} 
                    optionBarUrl = {optionBarUrl}
                    setOptionBarUrl = {setOptionBarUrl}  
                    dropdown = {dropdown}
                    setDropdown = { setDropdown }                        
                    />            */}
            </>
        )
    }
    return (
        <EditTopic
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
    )
}