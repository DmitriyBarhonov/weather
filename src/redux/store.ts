import {applyMiddleware, combineReducers,createStore } from 'redux'
import listTownReducer from './reducer'
import  thunkMiddleware from 'redux-thunk'
// searchTown
const reducers = combineReducers({
    listTown: listTownReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store