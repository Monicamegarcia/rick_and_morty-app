import style from "./Card.module.css";
import {Link} from "react-router-dom";
import {addFav,removeFav} from "../redux/actions";
import {connect} from "react-redux";
import {useState, useEffect} from "react";


function Card({id, onClose, name, status, especies, gender, origin, image, addFav, removeFav, myFavourites}) {
   //card recibe props que es un obj = {name="", status="", especies="",...,onClose= fn}
   //entonces puedo hacer destructuring de props y recibir sus propiedades como variables
   //{name}, {status} entonces, Card(props) pasa a Card({name, status, gender, ...})
   //entonces en el h2 recibo en vez de {props.status}, por ej, directamnte {status}
   const [isFav, setIsFav] = useState(false);

   const handleFavourite = () => {
      if (isFav) {
         setIsFav(false);
         removeFav(id)
      }
      else {
         setIsFav(false);
         addFav({id, name, status, especies, gender, origin, image});
      }
   
   }

   useEffect(() => {
      myFavourites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavourites]);

   return (
      <div>
         <button className={style.button} onClick={() => onClose(id)}>X</button>
         <Link to={`/detail/${id}`} >
          <h2 className={style.h2Name}>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{especies}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} />
         {
            isFav 
            ? (
               <button onClick={handleFavourite}>❤️</button>
            ) : (
               <button onClick={handleFavourite}>🤍</button>
            )
         }
      </div>
   );
}


const mapStateToProps = (state) => {
   return {
      myFavourites: state.mayFavourites
   }
}
const mapDispatchToProps = (dispatch) => {
   return {
   addfav: (character) => {dispatch(addFav(character))},
removeFav: (id) => {dispatch(removeFav(id))}
}
}
export default connect(
   mapStateToProps, 
   mapDispatchToProps
) (Card);