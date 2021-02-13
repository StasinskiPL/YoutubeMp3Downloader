import axios from "axios"

export const BASE_URL = "https://yt-ds.herokuapp.com/"


export default axios.create({
    baseURL: BASE_URL,
})





