import {createStore, applyMiddleware, compose} from "redux";
import  ThunkMiddleware from "redux-thunk";
import reducer from "./reducer";
//la primera parte siempre es igual
//el middleWare ayuda a conectar con el servidor

const composeEnhancer = window.__REDUX_DEVTOOLS_COMPOSE__ || compose;

const store = createStore (
    reducer,
    composeEnhancer (applyMiddleware(ThunkMiddleware)) //esta linea sirve para hacer peticiones a una API
);
export default store;