import Card from './Card';
import style from "./Cards.module.css";

export default function Cards({characters,onClose}) { //[{..}, {..}, {..}]
   return (
   
   <div className={style.divCards}>
      {
         /*characters.map((character)=>{ //voy a retonar una card por cada uno de los character, a card hay que pasarle 
            //las props que queremos, esas props van a salir de cada character que este en el array en data.js
           return <Card
            key={character.id}
            name={character.name}
            status={character.status}
            species={character.species}
            gender={character.gender}
            origin={character.origin.name}
            image={character.image}
            onClose={() => window.alert('Emulamos que se cierra la card')}
           />
         })
         */
        //se puede pasar lo anterior con destructuring
         characters.map(({id, name, status, species, gender, origin, image})=>{
           return <Card
            key={id}
            id={id}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin.name}
            image={image}
            onClose={onClose}
           />
         })
      }

   </div>
   );
}
