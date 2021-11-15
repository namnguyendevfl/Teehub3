import { login } from "../localStorage/accounts";
import { ntbks } from "../localStorage/notebooks";
import { apiCalls } from "./apiCalls";
const { API_BASE_URL, fetchJson} = apiCalls
const headers = new Headers()
headers.append("Content-Type", "application/json");


export const createChap = async(newChap, signal) => {
    const url = `${API_BASE_URL}/chapters/${login.getId()}/${ntbks.getNtbkSelected.id}`;
    const create = {
        method: "POST",
        headers,
        signal,
        body: JSON.stringify({data: newChap})
    };
    return await fetchJson(url,create);
}


export const listChaps = async(signal) => {
    const url = `${API_BASE_URL}/chapters/${login.getId()}/${ntbks.getNtbkSelected().id}`;
    const get = {
        headers,
        signal,
    };
    return await fetchJson(url,get);
}
