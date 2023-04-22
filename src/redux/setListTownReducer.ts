
import { Dispatch, ThunkAction } from "@reduxjs/toolkit"
import { getTownList } from "../api/api"
import { AppRootStateType } from "./store"

const SET_TOWN = "SET_TOWN"

// country: "RU"
// lat: 59.5412777
// local_names: {en: 'Tosno', ru: 'Тосно', de: 'Tosno', ascii: 'Tosno', feature_name: 'Tosno', …}
// lon: 30.8773645
// name: "Tosno"
// state: "Leningrad oblast"

type ListTownType = {
    LisCurrentCities: Array<ItemOfCityType>
}

type ItemOfCityType = {
    country: string
    lat: number
    local_names?: LocalNamesType
    lon: number
    name: string
    state:  string
}

type LocalNamesType = {
    [key: string]: string
}

const initialState: ListTownType = {
    LisCurrentCities: []
}

const listTownReducer = (state: ListTownType = initialState, action: ListTownActionsType):ListTownType => {


    switch (action.type) {
        case SET_TOWN: {
            console.log(action.listOfNewCities);
            
            return {
                ...state,
                LisCurrentCities: action.listOfNewCities
            }
        }

        default:
            return state;
    }

}

type AddTownActionCreatorType = {
    type: typeof SET_TOWN,
    listOfNewCities: ItemOfCityType[]
}

export type ListTownActionsType = AddTownActionCreatorType;

export const addTownActionCreator = (listOfNewCities: ItemOfCityType[]): AddTownActionCreatorType => ({
    type: SET_TOWN,
    listOfNewCities
});

type ThunkCreatorType = ThunkAction<void, AppRootStateType, string, AddTownActionCreatorType>

export const setTownThunkCreacter = (nameTown: string): ThunkCreatorType => {
    return (dispacth) => {
        getTownList.getNameTown(nameTown)
            .then(r => {
                if (r) {
                    console.log(r);
                    dispacth(addTownActionCreator(r))
                }
            });
    }
}

export default listTownReducer;