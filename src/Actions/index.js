import axios from "axios";

/* DEVELOPMENT CLIENTS */
export const apiClientDev = axios.create({
    baseURL: "http://localhost:3931",
    headers: {
        "Content-Type": "application/json"
    }
})


/* PRODUCTION CLIENTS */

export const apiClientProd = axios.create({
    baseURL: "http://url-to-production",
    headers: {
        "Content-Type": "application/json"
    }
})

