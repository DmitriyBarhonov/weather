
import { ThunkAction } from "@reduxjs/toolkit"
import { getTownList } from "../api/api"
import { AppRootStateType } from "./store"

const SET_TOWN = "SET_TOWN"


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
                    dispacth(addTownActionCreator(r))
                }else{
                    alert("Ошибка")
                }
            });
    }
}

export default listTownReducer;