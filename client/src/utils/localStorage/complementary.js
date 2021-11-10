export const hideCom = {
    getHideCom: () => JSON.parse(window.localStorage.getItem('hideCom')),
    saveHideCom: (hide) => window.localStorage.setItem('hideCom', JSON.stringify(hide)),
    dltHideCom: () => localStorage.removeItem('hideCom'),
}

export const minNtbkCom = {
    getMin: () => JSON.parse(window.localStorage.getItem('minNtbkCom')),
    saveMin: (close) => window.localStorage.setItem('minNtbkCom', JSON.stringify(close)),
    dltMin: () => localStorage.removeItem('minNtbkCom'),    
}