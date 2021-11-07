export const timer = {
    getStoredSession: () => JSON.parse(window.localStorage.getItem('session')),
    saveStoredSession: (session) => window.localStorage.setItem('session',JSON.stringify(session)),
    dltStoredSession: () => localStorage.removeItem('session'),
    getFocusInterval: () => JSON.parse(window.localStorage.getItem('focusInterval')),
    saveFocusInterval: (focusInterval) => window.localStorage.setItem('focusInterval',JSON.stringify(focusInterval)),
    dltFocusInterval: () => localStorage.removeItem('focusInterval'),
    getBreakInterval: () => JSON.parse(window.localStorage.getItem('breakInterval')),
    saveBreakInterval: (breakInterval) => window.localStorage.setItem('breakInterval',JSON.stringify(breakInterval)),
    dltBreakInterval: () => localStorage.removeItem('breakInterval'),
    getSetTimer: () => JSON.parse(window.localStorage.getItem('setTimer')),
    saveSetTimer: (setBoolean) => window.localStorage.setItem('setTimer',JSON.stringify(setBoolean))
}