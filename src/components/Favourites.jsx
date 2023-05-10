import Card from "./Card";
import {connect} from "react-redux";

const Favourites = ({myFavourites}) => {
    return (
        <>
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
        </>
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