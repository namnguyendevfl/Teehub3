export const ntbkSelectedUrl = {
    getUrl: () => JSON.parse(window.localStorage.getItem('ntbkSelectedUrl')),
    saveUrl: (url) => window.localStorage.setItem('ntbkSelectedUrl', JSON.stringify(url)),
    dltUrl: () => localStorage.removeItem('ntbkSelectedUrl'),
}

export const chapSelectedUrl = {
    getUrl: () => JSON.parse(window.localStorage.getItem('chapSelectedUrl')),
    saveUrl: (url) => window.localStorage.setItem('chapSelectedUrl', JSON.stringify(url)),
    dltUrl: () => localStorage.removeItem('chapSelectedUrl'),
}