import axios from "axios";

const API_KEY = '6dbc9d1c4aa30667541c0f5d4a1da9ee'

const instance = axios.create({
    // withCredentials: true,
    baseURL: 'https://api.openweathermap.org/'
})

export const getTown = {
    getNameTown(nameTown: string) {
        return instance.get(`geo/1.0/direct?q=${nameTown}&limit=5&appid=${API_KEY}`)
            .then(r => {
                return r.data
            })
    },
}