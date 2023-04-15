import style from "./Card.module.css";
import {Link} from "react-router-dom";


export default function Card({id, onClose, name, status, especies, gender, origin, image}) {
   //card recibe props que es un obj = {name="", status="", especies="",...,onClose= fn}
   //entonces puedo hacer destructuring de props y recibir sus propiedades como variables
   //{name}, {status} entonces, Card(props) pasa a Card({name, status, gender, ...})
   //entonces en el h2 recibo en vez de {props.status}, por ej, directamnte {status}
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
      </div>
   );
}
