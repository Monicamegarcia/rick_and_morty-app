import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./actions-types";

import axios from "axios";


//return { type: ADD_FAV, payload: character} saco que hice en front y reemplazo en addFav por const endpoint
export const addFav = (character) => {
        const endpoint = 'http://localhost:3001/rickandmorty/fav';
        return async (dispatch) => {
            try {
                const {data} = await axios.post(endpoint, character);

                if (!data.length) throw Error ("No hay favoritos")

                return dispatch({
                    type: ADD_FAV,
                    payload: data,
                });

            } catch (error) {
                console.log (error.message);
            }
             
           };
        };
    
export const removeFav = (id) => {
        const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
        return async (dispatch) => {
            try {
                const {data} = await axios.delete(endpoint);

                //if (!data.length) throw Error ("No hay favoritos")

                return dispatch({
                 type: REMOVE_FAV,
                 payload: data,
            });  

            } catch (error) {
                console.log (error.message);
            }
               
        };
 };

export const filterCard= (gender) => {
    return {type: FILTER, payload: gender}
}

export const orderCard= (order) => {
    return { type: ORDER, payload: order}
}

//recordar por convencion las constantes se escriben en mayusculas