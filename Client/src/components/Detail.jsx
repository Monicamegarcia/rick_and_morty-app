import axios from "axios";
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY="";

export default function Detail () {
/*useParams retorna un objetio, que tiene una propiedad id
//esta propiedad sale de la ruta, path=detail/:id
*/
  const { id } = useParams();
/*useState me da un array de dos posiciones, la primer aes 
//un esatdo y el segundo la funcion, pro eso se hace dest
//tructuring
//cuando se pasa el objeto vacio, se le asigna directanten
//al character={}
//trea de a un personja,e 1 detalle
//el estado inicializa debe ser el tipo de dato y que se 
//mantenga
//la api usa objeto en este caso
*/
  const [character, setCharacter] = useState ({});

  useEffect(() => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`)
    .then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);

    return (
        <div>
            <h2>{character?.name}</h2>
            <h2>{character?.status}</h2>
            <h2>{character?.species}</h2>
            <h2>{character?.gender}</h2>
            <h2>{character?.origin?.name}</h2>
            <img src={character?.image} alt={character?.name}/>
        </div>
    )
}

//renderizado condicional, varias formas_
//en vez de usar && tambien se puede hacer el condicional
// character ? <h2>{character.name}</h2> : null, if no se
//puede usar dar error, ternario si
//otra forma es, en lugar de poner js en {}, es:
// <div>
//<h2>{character?.name}</h2></div> 
//(si haya algo en el obj character, 
//entonces mostrame su propiedad name)
//otra forma: dentro del div y abriendo llaves:
// character && <div>
//<h2>{character.name}</h2>
//</div> 