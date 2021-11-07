export const ntbks = {
    getNtBkList: () => {
        let notebooks = window.localStorage.getItem('notebooks');
        notebooks = JSON.parse(notebooks);
        return (notebooks) ? notebooks : [];
    },
    saveNtBkList: (notebooks) => {
        return window.localStorage.setItem('notebooks', JSON.stringify(notebooks))
    },
    getNtBkSelected: () => {
        let notebook = window.localStorage.getItem('notebookSelected');
        notebook = JSON.parse(notebook);    
        return (notebook) ? notebook : [];
    },
    saveNtBkSelected: (notebook) => {
        return window.localStorage.setItem('notebookSelected', JSON.stringify(notebook))
    },
}

export const chaps = {
    getChapList: () => {
        let chapters = window.localStorage.getItem('chapters');
        chapters = JSON.parse(chapters);
        return chapters = (chapters) ? chapters : []
    },
    saveChapList: (chapters) => {
        return window.localStorage.setItem('chapters', JSON.stringify(chapters))
    },
    getChapSelected: () => {
        let chapter = window.localStorage.getItem('chapterSelected');
        chapter = JSON.parse(chapter);    
        return (chapter) ? chapter : [];
    },
    saveChapSelected: (chapter) => {
        return window.localStorage.setItem('chapterSelected', JSON.stringify(chapter))
    }    
}

export const topcs = {
    getTopicList: () => {
        let topics = window.localStorage.getItem('topics');
        topics = JSON.parse(topics);
        return topics = (topics) ? topics : []
    },
    saveTopicList: (topics) => {
        return window.localStorage.setItem('topics', JSON.stringify(topics))
    },
    getTopicSelected: () => {
        let topic = window.localStorage.getItem('topicSelected');
        topic = JSON.parse(topic);    
        return (topic) ? topic : [];
    },
    saveTopicSelected: (topic) => {
        return window.localStorage.setItem('topicSelected', JSON.stringify(topic))
    }    
}