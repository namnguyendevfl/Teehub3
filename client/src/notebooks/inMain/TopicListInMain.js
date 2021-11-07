import React, { useEffect, useState } from "react";
import { chaps, ntbks, topcs } from "../../utils/data/notebooks";
import { main } from "../../utils/icons/main/main";

export default function TopicList(props) {
    const {
        ntBkSelected,
        setNtBkSelected, 
        chapSelected, 
        setChapSelected, 
        displayLeftMain, 
        setDisplayLeftMain, 
        displayRightMain, 
        setDisplayRightMain, 
    } = props

    const [ displayTooltip, setDisplayToolTip ] = useState(false);

    const ntBkSelectedLcalStorg = ntbks.getNtBkSelected()
    const ntBkToDisplay = (ntBkSelected) ? ntBkSelected : ntBkSelectedLcalStorg

    const chapSelectedLcalStorg = chaps.getChapSelected()
    const chapterToDisplay = (chapSelected) ? chapSelected : chapSelectedLcalStorg

    const topics = topcs.getTopicList()

    //There is a bug when refreshing the page. It doesnt show the correct topicList => need to fix this
    const topicsSelected = topics.filter((topic,idx) => topic.bookId === ntBkToDisplay.id && topic.chapterId === chapterToDisplay.id)
    // const topicsSelected = topics.filter((topic,idx) => topic.bookId === ntBkSelected.id && topic.chapterId === chapSelected.id)
    const topicList = topicsSelected.map((topic, mapIdx) => {
        const contents = topic.content.split("\n")
                // remove spaces and empty lines
        const newContents = contents.filter((content,idx) => content.replace(/\s/g, '').length)
        const newTopics = topicsSelected.filter((topic, filterIdx) => filterIdx !== mapIdx)        
        return (
            <>
                <section    id = {`${topic.title}`} 
                            className = "topicDisplay px-3"
                >
                <h6>{topic.title}</h6>
                {/* {newContents.length
                ?   <p className = "displayText"> {newContents.join('\n')} </p>
                :   <CreateTopicContent topic = {topic} newTopics = {newTopics} mapIdx = {mapIdx} topics = {topics}/>
                } */}
                </section>
            </>
    )})
    return (
        <>
        <div className = "">
            <div className = "w-100 py-2 d-flex justify-content-between">
            <button className = "d-flex align-items-center justify-content-center plusBtn ms-1"
                    onClick = {(e) => {
                        setDisplayLeftMain(() => !displayLeftMain)
                        
                    }}
            >   
                {
                    displayLeftMain 
                    ? main.leftChevron()
                    : main.rightChevron()
                }
            </button>
            <h3 className = "text-center m-0">
                {ntBkToDisplay.title}

                </h3>
            <div className = "d-flex align-items-center py-0">
                {
                    !displayRightMain && 
                    <button className = "d-flex plusBtn align-items-center justify-content-center"
                            onClick = {
                                (e) => setDisplayToolTip(() => !displayTooltip)
                            }
                    > 
                        {/* <CaretDown />  */}
                    </button>
                    
                }
            {/* {
                displayTooltip && 
                <RightToolTip 
                                displayTooltip = {displayTooltip}
                                setDisplayToolTip = {setDisplayToolTip}
                                ntBkSelected = {ntBkSelected}
                                setNtBkSelected = {setNtBkSelected}
                                chapSelected = {chapSelected}
                                setChapSelected = {setChapSelected}
                                displayLeftMain = {displayLeftMain}
                                setDisplayLeftMain = {setDisplayLeftMain}
                                displayRightMain = {displayRightMain}
                                setDisplayRightMain = {setDisplayRightMain}  
                />
            } */}
                <button className = "d-flex align-items-center justify-content-center plusBtn me-1"
                        onClick = {(e) => {
                            setDisplayRightMain(() => !displayRightMain)
                            setDisplayToolTip(() => false)
                        }}
                        >    
                    {
                        displayRightMain
                        ?  main.rightChevron()
                        :  main.leftChevron()
                    }    
                </button>
            </div>
            </div>
            <hr className = "m-0"/>
            <h5 className = "text-start my-2 text-center"> 
            Chapter {chapterToDisplay.id}: {chapterToDisplay.title}  
            </h5>

            {topicList}
        </div>
        </>

    )
}