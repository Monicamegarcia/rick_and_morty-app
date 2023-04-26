import { ADD_FAV, REMOVE_FAV } from "./actions-types";


const initialState= {
    myFavourites : []
}

const reducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavourites: [...state.myFavourites, payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavourites: state.myFavourites.filter(fav =>fav.id!== payload)
            }
        default:
            return {...state}

    }

    
}

//la action siempre es un objeto

export default reducer;

//sin destructuring const reducer = (state=initialState, action) => {
 //   switch (action.type)

 //vamos a modificar myFavourite