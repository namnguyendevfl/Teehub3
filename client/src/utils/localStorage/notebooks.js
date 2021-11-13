import { complementary } from "../icons/complementary/Complementary";
import { login } from "./accounts";

export const ntbks = {
    getNtbks: () => {
        const notebooks = JSON.parse(window.localStorage.getItem('notebooks'))
        return notebooks.filter((ntbk,idx) => ntbk.userId === login.getId());;
    },
    saveNtbks: (notebooks) => window.localStorage.setItem('notebooks', JSON.stringify(notebooks)),
    dltNtbks: () => localStorage.removeItem('notebooks'),
    getNtbkSelected: () => JSON.parse(window.localStorage.getItem('notebookSelected')),
    saveNtbkSelected: (notebook) => window.localStorage.setItem('notebookSelected', JSON.stringify(notebook)),
    dltNtbkSelected: () => localStorage.removeItem('notebookSelected'),
}

export const chaps = {
    getChaps: () => {
        const chapters = JSON.parse(window.localStorage.getItem('chapters'))
        return chapters.filter((chap,idx) => chap.userId === login.getId())},
    saveChaps: (chapters) => window.localStorage.setItem('chapters', JSON.stringify(chapters)),
    dltChaps: () => localStorage.removeItem('chapters'),
    getChapSelected: () => JSON.parse(window.localStorage.getItem('chapterSelected')),
    saveChapSelected: (chapter) => window.localStorage.setItem('chapterSelected', JSON.stringify(chapter)),   
    dltChapSelected: () => localStorage.removeItem('chapterSelected'),
}

export const topcs = {
    getTopics: () => {
        const topics = JSON.parse(window.localStorage.getItem('topics'))
        return topics.filter((topic,idx) => topic.userId === login.getId());  
    },
    saveTopics: (topics) => window.localStorage.setItem('topics', JSON.stringify(topics)),
    delTopics: () => localStorage.removeItem('topics'),
    getTopicSelected: () => JSON.parse(window.localStorage.getItem('topicSelected')),
    saveTopicSelected: (topic) => window.localStorage.setItem('topicSelected', JSON.stringify(topic)),
    delTopicSelected: () => localStorage.removeItem('topicSelected')   
}

export const expand = {
    getRight: () => JSON.parse(window.localStorage.getItem('rExpand')),
    saveRight: (right) => window.localStorage.setItem('rExpand', JSON.stringify(right)),
    delRight: () => localStorage.removeItem('rExpand'),
    getLeft: () => JSON.parse(window.localStorage.getItem('lExpand')),
    saveLeft: (left) => window.localStorage.setItem('lExpand', JSON.stringify(left)),
    delLeft: () => localStorage.removeItem('lExpand')   
}

export const ntbkCom = {
    getStyle: () => JSON.parse(window.localStorage.getItem('ntbkComStyle')),
    saveStyle: (style) => window.localStorage.setItem('ntbkComStyle', JSON.stringify(style)),
    dltStyle: () => localStorage.removeItem('ntbkComStyle'),    
}

export const ListToDlt = (props) => {
    const {
        optionsDlt,
        setOptionsDlt,
        indicator,      
    } = props
    const list = (() => {
        switch (indicator) {
            case "notebook" : return ntbks.getNtbks();
            case "chapter": return chaps.getChaps();
            case "topic": return topcs.getTopics();
        }
    })()
    const optionsDltIds = (optionsDlt) ? optionsDlt.map((optionDlt, idx) => optionDlt.id) : null
    const newOptions = (!optionsDltIds) ? list : list.filter((option, idx) => !optionsDltIds.includes(option.id))
    return newOptions.map((option,idx) => 
        <li className = "dlt me-0 py-1 pe-2 list-group-item d-flex align-items-center justify-content-between">
        <span>{option.title} </span>
        <button 
                className = "ntbkBtn d-flex align-items-center justify-content-center"
                onClick = {(e) => {
                    setOptionsDlt((prevOption) => [...prevOption,option])
                }}
                > 
            {complementary.trash()}
        </button>
        </li>
    )
}
