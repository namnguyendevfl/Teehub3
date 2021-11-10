export const navOptions = {
    getNav: () => JSON.parse(window.localStorage.getItem('navOption')),
    saveNav: (option) => window.localStorage.setItem('navOption', JSON.stringify(option)),
    dltNav: () => localStorage.removeItem('navOption'),
}
