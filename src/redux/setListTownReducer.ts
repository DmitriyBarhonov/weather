import { ThunkAction } from "@reduxjs/toolkit"
import { getTownList } from "../api/api"
import { AppRootStateType } from "./store"

const SET_TOWN = "SET_TOWN"
const SET_LOADING = "SET-LOADING"


type ListTownType = {
    LisCurrentCities: Array<ItemOfCityType>
    isLoading: boolean
}
type LocalNamesType = {
    [key: string]: string
}

type ItemOfCityType = {
    country: string
    lat: number
    local_names?: LocalNamesType
    lon: number
    name: string
    state: string
}


const initialState: ListTownType = {
    LisCurrentCities: [],
    isLoading: false
}

const listTownReducer = (state: ListTownType = initialState, action: ListTownActionsType): ListTownType => {

    switch (action.type) {
        case SET_TOWN: {
            return { ...state, LisCurrentCities: action.listOfNewCities }
        }
        case SET_LOADING: {
            console.log(action.isLoading);

            return { ...state, isLoading: action.isLoading }
        }
        default:
            return state;
    }

}
export type ListTownActionsType = AddTownActionCreatorType | IsLoadingActionCreatorType;
type ThunkCreatorType = ThunkAction<void, AppRootStateType, string, ListTownActionsType>

type AddTownActionCreatorType = {
    type: typeof SET_TOWN,
    listOfNewCities: ItemOfCityType[]
}


export const addTownActionCreator = (listOfNewCities: ItemOfCityType[]): AddTownActionCreatorType => ({
    type: SET_TOWN,
    listOfNewCities
});

type IsLoadingActionCreatorType = {
    type: typeof SET_LOADING,
    isLoading: boolean
}
export const isLoadingActionCreator = (isLoading: boolean): IsLoadingActionCreatorType => ({
    type: SET_LOADING,
    isLoading
});



export const setTownThunkCreacter = (nameTown: string): ThunkCreatorType => {
    return (dispacth) => {
        dispacth(isLoadingActionCreator(true))
        getTownList.getNameTown(nameTown)
            .then(r => {
                if (r) {
                    dispacth(addTownActionCreator(r))
                    dispacth(isLoadingActionCreator(false))
                } else {
                    alert("Ошибка")
                }

            });
    }
}

export default listTownReducer;