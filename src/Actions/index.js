import axios from "axios";

/* DEVELOPMENT CLIENTS */
export const apiClientDev = axios.create({
    baseURL: "https://mushfiqweb-api.herokuapp.com",
    headers: {
        "Content-Type": "application/json"
    }
})


/* PRODUCTION CLIENTS */

export const apiClientProd = axios.create({
    baseURL: "https://mushfiqweb-api.herokuapp.com",
    headers: {
        "Content-Type": "application/json"
    }
})

