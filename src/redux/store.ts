import {applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux'
import listTownReducer, { ListTownActionsType } from './setListTownReducer'
import  thunkMiddleware from 'redux-thunk'
import currentWeatherReducer, { AddWeatherActionCreatorType } from './setCurrentWeatherReducer'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
// searchTown
const reducers = combineReducers({
    listTown: listTownReducer,
    currentWeather: currentWeatherReducer
})

export type AppRootStateType = ReturnType<typeof reducers>

type AppActionsType = ListTownActionsType |  AddWeatherActionCreatorType
type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionsType>

export const useTypedDispatch = () => useDispatch<TypedDispatch>();

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store