export default function Card({onClose, name, status, especies, gender, origin, image}) {
   //card recibe props que es un obj = {name="", status="", especies="",...,onClose= fn}
   //entonces puedo hacer destructuring de props y recibir sus propiedades como variables
   //{name}, {status} entonces, Card(props) pasa a Card({name, status, gender, ...})
   //entonces en el h2 recibo en vez de {props.status}, por ej, directamnte {status}
   return (
      <div>
         <button onClick={onClose}>X</button>
         <h2>{name}</h2>
         <h2>{status}</h2>
         <h2>{especies}</h2>
         <h2>{gender}</h2>
         <h2>{origin}</h2>
         <img src={image} alt={name} />
      </div>
   );
}
