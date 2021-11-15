export const login = {
    getState: () => JSON.parse(window.localStorage.getItem('loginState')),
    saveState: (loginState) => window.localStorage.setItem('loginState', JSON.stringify(loginState)),
    dltState: () => localStorage.removeItem('loginState'),
    getUserName: () => JSON.parse(window.localStorage.getItem('loginId')),
    saveUserName: (loginId) => window.localStorage.setItem('loginId', JSON.stringify(loginId)),
    dltUserName: () => localStorage.removeItem('loginId'),
    getLoggedIns: () => JSON.parse(window.localStorage.getItem('loggedIns')),
    saveLoggedIns: (loginState) => window.localStorage.setItem('loggedIns', JSON.stringify(loginState)),
    dltLoggedIns: () => localStorage.removeItem('loginState'),
}


