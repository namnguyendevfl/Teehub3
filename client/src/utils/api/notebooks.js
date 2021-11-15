import { login } from "../localStorage/accounts";
import { apiCalls } from "./apiCalls";
const { API_BASE_URL, fetchJson} = apiCalls
const headers = new Headers()
headers.append("Content-Type", "application/json");

export const createNtbk = async(newNtbk, signal) => {
    const url = `${API_BASE_URL}/notebooks/${login.getUserName()}`;
    const create = {
        method: "POST",
        headers,
        signal,
        body: JSON.stringify({data: newNtbk})
    };
    return await fetchJson(url,create);
}


export const listNtbks = async(signal) => {
    const url = `${API_BASE_URL}/notebooks/${login.getUserName()}`;
    const get = {
        headers,
        signal,
    };
    return await fetchJson(url,get);
}
