import {
    getTown
} from "../api/api"

const SET_WEATHER = "SET_WEATHER"


let initialState = {
        dataWeather: null
}


const searchTownReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_WEATHER: {
            return {
                ...state,
            }
        }

        default:
            return state;
    }

}


const setWeatherPostActionCreator = (listTown) => ({
    type: SET_TOWN,
    listTown
});

export const setWeatherThunkCreacter = (town) => {
    return (dispacth) => {
    }
}

export default searchTownReducer;