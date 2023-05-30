import { Dispatch } from "@reduxjs/toolkit"
import { getWeather } from "../api/api"
import { WeatherDataType } from "../components/types/typeDetailedWeather"

// const initialState2: WeatherInTownType = {
//     weatherInfo: {

//         base: '',
//         clouds: {all: 0},
//         cod: 0,
//         coord: { lat: 0, lon: 0,},
//         dt: 0,
//         id: 0,
//         main: {
//             feels_like: 0,
//             grnd_level: 0,
//             humidity: 0,
//             pressure: 0,
//             sea_level: 0,
//             temp: 0,
//             temp_max: 0,
//             temp_min: 0, },
//         name: '',
//         sys: {
//             country: '',
//             sunrise: 0,
//             sunset: 0,
//         },
//         timezone: 0,
//         visibility: 0,
//         weather: [{ deg: 0, gust: 0, speed: 0, }],
//         wind: { deg: 0, gust: 0, speed: 0, }
//     },

//     shouldRedirect: false
// }





const SET_WEATHER = "SET_WEATHER"

type WeatherInTownType = {
    weatherData: WeatherDataType
    shouldRedirect: boolean
}
// reselect


const initialState: WeatherInTownType = {
    weatherData: {} as WeatherDataType,
    shouldRedirect: false
}


const currentWeatherReducer = (state = initialState, action: AddWeatherActionCreatorType): WeatherInTownType => {

    switch (action.type) {
        case SET_WEATHER: {
            console.log(action.weatherInTown );
            console.log(action);

            return {
                ...state,
                weatherData: action.weatherInTown,
                shouldRedirect: action.shouldRedirect
            }
        }
        default:
            return state;
    }
}

export type AddWeatherActionCreatorType = {
    type: typeof SET_WEATHER,
    weatherInTown: WeatherDataType
    shouldRedirect: boolean
}


export const addWeatherActionCreator = (weatherInTown: WeatherDataType): AddWeatherActionCreatorType => ({
    type: SET_WEATHER,
    weatherInTown,
    shouldRedirect: true
});


export const setWeatherThunkCreactor = (lat: number, lon: number): any => {
    return (dispacth: Dispatch<AddWeatherActionCreatorType>) => {
        getWeather.getCurrentWeather(lat, lon)
            .then(r => {
                if (r) {
                    if (r.cod === 200) {
                        dispacth(addWeatherActionCreator(r))
                    } else {
                        alert("Error");
                    }


                }
            });
    }
}

export default currentWeatherReducer;