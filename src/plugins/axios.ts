import axios from "axios";

const toMovie = axios.create({
    baseURL: "https://kinopoiskapiunofficial.tech/api/v2.2/",
    timeout: 1000,
    headers: {
        'X-API-KEY': 'f8bbad5e-4c28-49b9-acfe-ac896726fbdd',
        'Content-Type': 'application/json',
    }
})

export default toMovie