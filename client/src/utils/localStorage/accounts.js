export const login = {
    getState: () => JSON.parse(window.localStorage.getItem('loginState')),
    saveState: (loginState) => window.localStorage.setItem('loginState', JSON.stringify(loginState)),
    dltState: () => localStorage.removeItem('loginState'),
    getUserName: () => JSON.parse(window.localStorage.getItem('loginId')),
    saveUserName: (loginId) => window.localStorage.setItem('loginId', JSON.stringify(loginId)),
    dltUserName: () => localStorage.removeItem('loginId'),
    getLoggedIn: () => JSON.parse(window.localStorage.getItem('loginedIN')),
    saveLoggedIn: (loginState) => window.localStorage.setItem('loginedIN', JSON.stringify(loginState)),
    dltLoggedIn: () => localStorage.removeItem('loginedIN'),
    getLoggedIns: () => JSON.parse(window.localStorage.getItem('loginedINs')),
    saveLoggedIns: (loginState) => window.localStorage.setItem('loginedINs', JSON.stringify(loginState)),
    dltLoggedIns: () => localStorage.removeItem('loginedINs'),
}


