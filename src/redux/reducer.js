import { ADD_FAV, REMOVE_FAV } from "./actions-types";


const initialState= {
    myFavourites : [],
    allCharacters: []
}

const reducer = (state=initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return {
                ...state,
                myFavourites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavourites: state.myFavourites.filter(fav =>fav.id!== payload)
            }

        case FILTER:
            const allCharactersFiltered=state.allCharacters.filter (character =>character.gender === payload)
            return {
                ...state,
                myFavourites:allCharactersFiltered
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