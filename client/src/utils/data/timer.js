export const timer = {
    getSession: () => JSON.parse(window.localStorage.getItem('session')),
    saveSession: (session) => window.localStorage.setItem('session',JSON.stringify(session)),
    dltSession: () => localStorage.removeItem('session'),
    getFocus: () => JSON.parse(window.localStorage.getItem('focusInterval')),
    saveFocus: (focusInterval) => window.localStorage.setItem('focusInterval',JSON.stringify(focusInterval)),
    dltFocus: () => localStorage.removeItem('focusInterval'),
    getBreak: () => JSON.parse(window.localStorage.getItem('breakInterval')),
    saveBreak: (breakInterval) => window.localStorage.setItem('breakInterval',JSON.stringify(breakInterval)),
    dltBreak: () => localStorage.removeItem('breakInterval'),
    getSetTimer: () => JSON.parse(window.localStorage.getItem('setTimer')),
    saveSetTimer: (setBoolean) => window.localStorage.setItem('setTimer',JSON.stringify(setBoolean))
}