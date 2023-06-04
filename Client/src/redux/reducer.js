import { ADD_FAV, REMOVE_FAV } from "./actions-types";


const initialState= {
    myFavourites : [],
    allCharactersFav: []
}

const reducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavourites:  payload,
                allCharactersFav:  payload
                
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavourites: payload,
                allCharactersFav:  payload
            }

        case FILTER:
            const allCharactersFiltered=state.allCharactersFav.filter (character =>character.gender === payload)
            return {
                ...state,
                myFavourites:
                    payload === "allCharacters"
                    ?[...state.allCharactersFav]
                    :allCharactersFiltered
            }

        case ORDER:
            const allCharactersFavCopy = [...state.allCharactersFav]
            return {
                ...state,
                myFavourites:
                    payload === "a"
                    ? allCharactersFavCopy.sort((a,b) =>a.id - b.id)
                    : allCharactersFavCopy.sort((a,b) =>b.id - a.id)
            }

        default:
            return {...state}

    }

    
}

//la action siempre es un objeto
// - aca es menor, que si vamos a la documentacion de mozilla
//dice que el metodo sort se utiliza con -

export default reducer;

//sin destructuring const reducer = (state=initialState, action) => {
 //   switch (action.type)

 //vamos a modificar myFavourite