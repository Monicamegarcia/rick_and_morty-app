import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";


export const addFav = (character) => {
    return { type: ADD_FAV, payload: character}
};

export const removeFav = (id) => {
    return { type : REMOVE_FAV, payload : id}
}

export const filterCard= (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCard= (order) => {
    return { type: order, payload: order}
}

//recordar por convencion las constantes se escriben en mayucsculas