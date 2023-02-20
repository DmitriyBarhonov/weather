import {
    getTown
} from "../api/api"

const SET_TOWN = "SET_TOWN"
const SET_PRESENCE = "SET_PRESENCE"


let initialState = {
    listTown: null,
    cityPresence: false
    //    lat: null,
    //    lon: null
}


const searchTownReducer = (state = initialState, action) => {


    switch (action.type) {

        case SET_TOWN: {
            return {
                ...state,
                listTown: action.listTown
            }
        }

        case SET_PRESENCE: {
            return {
                ...state,
                cityPresence: action.cityPresence
            }
        }

        default:
            return state;
    }

}


const addPostActionCreator = (listTown) => ({
    type: SET_TOWN,
    listTown
});

const setCityPresence = (cityPresence) => ({
    type: SET_PRESENCE,
    cityPresence
})

export const setTownThunkCreacter = (town) => {
    return (dispacth) => {
        getTown.getNameTown(town)
            .then(r => {
                if (r) {
                    console.log(r)
                    dispacth(addPostActionCreator(r))
                    dispacth(setCityPresence(true))
                }
            });
    }
}

export default searchTownReducer;