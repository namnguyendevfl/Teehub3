import "./ComplementaryLayout.css"
import React from "react";
import { Routes, Route} from "react-router-dom";
import NtBkList from "../notebooks/inComplementary/notebook/NtBkListInComplementary";
import ChapterList from "../notebooks/inComplementary/chap/ChapListInComplementary";
import OptionBar from "../notebooks/inComplementary/optionBar/optionBar";

export default function ComplementaryLayout(props) {
    const {
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayNav, 
        setDisplayNav, 
        displayCom, 
        setDisplayCom, 
    } = props 

    return (
        <>
        <Routes>
            <Route  path = "notebooks" 
                    element = {
                    <div className = "notebooks">
                        <OptionBar 
                            ntBkSelected = {ntBkSelected}
                            setNtBkSelected = {setNtBkSelected}
                            chapSelected = {chapSelected}
                            setChapSelected = {setChapSelected}
                            displayNav = {displayNav}
                            setDisplayNav = {setDisplayNav}
                            displayCom = {displayCom}
                            setDisplayCom = {setDisplayCom}    
                        />
                        <NtBkList 
                            ntBkSelected = {ntBkSelected}
                            setNtBkSelected = {setNtBkSelected}
                            chapSelected = {chapSelected}
                            setChapSelected = {setChapSelected}
                            displayNav = {displayNav}
                            setDisplayNav = {setDisplayNav}
                            displayCom = {displayCom}
                            setDisplayCom = {setDisplayCom}        
                        />
                    </div>
                    }
                    >
                <Route path =":bookId" 
                    element = {<ChapterList 
                            ntBkSelected = {ntBkSelected}
                            setNtBkSelected = {setNtBkSelected}
                            chapSelected = {chapSelected}
                            setChapSelected = {setChapSelected}
                            displayNav = {displayNav}
                            setDisplayNav = {setDisplayNav}
                            displayCom = {displayCom}
                            setDisplayCom = {setDisplayCom}        
                    />}
                /> 
            </Route> 
        </Routes>
        <div>
        Speaking to Fox News, a parent in California who has witnessed the impact of masking school children, said: "Parents have been begging for the same consideration that teacher union and education leaders extended to themselves; for their kids to be able to hear their classmates. Randi is at higher risk of severe covid as a vaccinated senior than my unvaccinated young children."

"Their soft voices have been muffled for nearly two years and we are one of the few countries masking toddlers and grade school children," the parent added. "It’s not lost on me that this severe obligation on kids would not exist if it weren’t for Ms. Weingarten and the other corrupt leaders that run our public education system."
        </div>
        </>
    )

}