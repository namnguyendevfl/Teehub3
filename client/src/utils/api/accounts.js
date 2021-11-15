import { login } from "../localStorage/accounts";
import { apiCalls } from "./apiCalls";
const { API_BASE_URL, fetchJson} = apiCalls
const headers = new Headers()
headers.append("Content-Type", "application/json");



export const createUser = async(newUser, signal) => {
    const url = `${API_BASE_URL}/users`;
    console.log(newUser)
    const create = {
        method: "POST",
        headers,
        signal,
        body: JSON.stringify({data: newUser})
    };
    return await fetchJson(url,create);
}

export const listUsers = async(signal) => {
    const url = `${API_BASE_URL}/users`;
    const get = {
        headers,
        signal,
    };
    return await fetchJson(url,get);
}



//Login API
const LOGIN_URL = `${API_BASE_URL}/users/login/${login.getUserName()}`;
export const createUserLoggingIn = async (userLoggingIn,signal) => {
    console.log(userLoggingIn)
    const create = {
        method: "POST",
        headers,
        signal,
        body: JSON.stringify({data: userLoggingIn})
    };
    return await fetchJson(LOGIN_URL ,create);    
}
export const readUserLoggingIn = async(signal) => {
    const get = {
        headers,
        signal,
    };
    return await fetchJson(LOGIN_URL ,get);    
}