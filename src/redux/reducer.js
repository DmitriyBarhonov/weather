import { getTown } from "../api/api"

const SET_TOWN = "SET_TOWN"

 

let initialState = {
   towm: null,
//    lat: null,
//    lon: null
}


const searchTownReducer = (state = initialState, action) => {


    switch (action.type) {
        case SET_TOWN: {
            return {
                ...state,
                town: action.towm
            }
        }

        default:
            return state;
    }

}


export const addPostActionCreator = (newTown) => ({
    type: SET_TOWN,
    newTown
});
 

export const setTownThunkCreacter = (town) => {
    return (dispacth) => {
        getTown.getNameTown(town)
            .then(r => {
                if (r) {
                    dispacth(addPostActionCreator(r.data))
                }
            });
    }
}

export default searchTownReducer;