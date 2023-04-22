import { Dispatch } from "@reduxjs/toolkit"
import { getWeather } from "../api/api"
import { ThunkAction } from 'redux-thunk';

const SET_WEATHER = "SET_WEATHER"

type WeatherInTownType = {
    weatherInfo: null
}



const initialState = {
    weatherInfo: null
}


const currentWeatherReducer = (state = initialState, action: addWeatherActionCreatorType) => {


    switch (action.type) {
        case SET_WEATHER: {
            console.log(action.weatherInTown);

            return {
                ...state,
                listOfNewCities: action.weatherInTown
            }
        }

        default:
            return state;
    }

}

type addWeatherActionCreatorType = {
    type: typeof SET_WEATHER,
    weatherInTown: WeatherInTownType
}


export const addWeatherActionCreator = (weatherInTown: WeatherInTownType): addWeatherActionCreatorType => ({
    type: SET_WEATHER,
    weatherInTown
});


export const setWeatherThunkCreactor = (lat: number, lon: number): any => {
    return (dispacth: Dispatch<addWeatherActionCreatorType>) => {
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