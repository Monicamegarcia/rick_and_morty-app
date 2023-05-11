import Card from "./Card";
import {connect, useDispatch} from "react-redux";
import { filterCards, orderCards } from "../redux/actions";
import {useState} from "react";


const Favourites = ({myFavourites}) => {
    
    const dispatch= useDispatch();

    const [aux, setAux] = useState(false);

    const handleOrder= (event) => {
        dispatch(orderCards(event.target.value));
        setAux(true);

    }

    const handleFilter = (event) => {
        dispatch (filterCards(event.target.value))
    }
    return (
        <div>
        <select onChange={handleOrder}>
            <option value="a">ascendente</option>
            <option value="d">descendente</option>
        </select>
        <select onChange={handleFilter}>
            <option value="mail">mail</option>
            <option value="female">female</option>
            <option value="genderless">genderless</option>
            <option value="unknown">unknown</option>
            <option value="allCharacters">all Characters</option>
        </select>
        {
            myFavourites?.map(fav => {
                return (
                    <Card
                        key={fav.id}
                        id={fav.id}
                        name={fav.name}
                        species={fav.species}
                        gender={fav.gender}
                        image={fav.image}
                        onClose ={fav.onClose}
                    /> 
                )
            }
           )
        }
        </div>
        )
}


const mapStateToProps= (state) => {
    return {
        myFavourites: state.myFavourites
    }
}

export default connect (
    mapStateToProps, 
    null
)(Favourites);