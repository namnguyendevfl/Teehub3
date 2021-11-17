import { login } from "../localStorage/accounts";
import { apiCalls } from "./apiCalls";
import { ntbks } from "../localStorage/notebooks"
const { API_BASE_URL, fetchJson} = apiCalls
const headers = new Headers()
headers.append("Content-Type", "application/json");

const userId = login.getLoggedIn().user_id
const ntbkId = ntbks.getNtbkDlted() ? ntbks.getNtbkDlted().ntbk_id : null
export const createNtbk = async(newNtbk, signal) => {
    const url = `${API_BASE_URL}/notebooks/${userId}`;
    const create = {
        method: "POST",
        headers,
        signal,
        body: JSON.stringify({data: newNtbk})
    };
    return await fetchJson(url,create);
}


export const listNtbks = async (signal) => {
    const url = `${API_BASE_URL}/notebooks/${userId}`;
    const get = {
        headers,
        signal,
    };
    return await fetchJson(url,get);
}

export const dltNtbk = async (dltedNtbk, signal) => {
    const url = `${API_BASE_URL}/notebooks/${userId}/${ntbkId}`;
    const destroy = {
        method: "DELETE",
        headers,
        signal,
        body: JSON.stringify({data: dltedNtbk})
    };
    return await fetchJson(url,destroy);
} 
