import axios from "axios";

export const Api = axios.create({
    baseURL: "https://68b2e6c2c28940c9e69da7d4.mockapi.io/Products"
})