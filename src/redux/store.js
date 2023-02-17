import {applyMiddleware, combineReducers,createStore } from 'redux'
import searchTownReducer from './reducer'
import  thunkMiddleware from 'redux-thunk'
// searchTown
const reducers = combineReducers({
    searchTown: searchTownReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store