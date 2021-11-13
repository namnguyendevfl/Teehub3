export const login = {
    getState: () => JSON.parse(window.localStorage.getItem('loginState')),
    saveState: (notebooks) => window.localStorage.setItem('loginState', JSON.stringify(notebooks)),
    dltState: () => localStorage.removeItem('loginState'),
    getId: () => JSON.parse(window.localStorage.getItem('loginId')),
    saveId: (notebooks) => window.localStorage.setItem('loginId', JSON.stringify(notebooks)),
    dltId: () => localStorage.removeItem('loginId'),
}

