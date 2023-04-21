import { Dispatch } from "@reduxjs/toolkit"
import { getTown } from "../api/api"
import { ThunkAction } from 'redux-thunk';
const SET_TOWN = "SET_TOWN"

type ListOfCityType = {
    country: string
    lat: number
    local_names?: LocalNamesType  //{ fi: 'Tusina', ascii: 'Tosno', feature_name: 'Tosno', ca: 'Tosno', en: 'Tosno', … }
    lon: number
    name: string
    state:  string
}

type LocalNamesType = {
    [key: string]: string
}


const initialState = {
    listOfNewCities: Array<ListOfCityType>,
}


const listTownReducer = (state = initialState, action: addTownActionCreatorType) => {


    switch (action.type) {
        case SET_TOWN: {
            console.log(action.listOfNewCities);

            return {
                ...state,
                listOfNewCities: action.listOfNewCities
            }
        }

        default:
            return state;
    }

}

type addTownActionCreatorType = {
    type: typeof SET_TOWN,
    listOfNewCities: ListOfCityType
}


export const addTownActionCreator = (listOfNewCities: ListOfCityType): addTownActionCreatorType => ({
    type: SET_TOWN,
    listOfNewCities
});


export const setTownThunkCreacter = (nameTown: string): any => {
    return (dispacth: Dispatch<addTownActionCreatorType>) => {
        getTown.getNameTown(nameTown)
            .then(r => {
                if (r) {
                    console.log(r);
                    dispacth(addTownActionCreator(r))
                }
            });
    }
}

export default listTownReducer;