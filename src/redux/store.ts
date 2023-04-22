import {applyMiddleware, combineReducers,createStore } from 'redux'
import listTownReducer, { ListTownActionsType } from './setListTownReducer'
import  thunkMiddleware from 'redux-thunk'
import currentWeatherReducer from './setCurrentWeatherReducer'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from '@reduxjs/toolkit'
// searchTown
const reducers = combineReducers({
    listTown: listTownReducer,
    currentWeather: currentWeatherReducer
})

export type AppRootStateType = ReturnType<typeof reducers>

type AppActionsType = ListTownActionsType
type TypedDispatch = ThunkDispatch<AppRootStateType, any, AppActionsType>

export const useTypedDispatch = () => useDispatch<TypedDispatch>();

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store