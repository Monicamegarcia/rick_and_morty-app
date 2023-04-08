import style from "./SearchBar.module.css";
import {useState} from "react";

export default function SearchBar({onSearch}) { //props es un objeto que se le hace destructuring
    //el boton tiene un evento onClick, a esa propiedad oncClick le agrego una funcion, se pone sin ejecutar
  const [ID, setID] = useState ([""])
  
  const handleChange = (event) => {
   setID({
      ...ID,
      ID:event.target.value
   })
  }
    return (
      <div className= {style.divSearchBar}>
         <input value={ID} handleChange={handleChange} type='search' />
         <button className={style.buttonSearchBar} onClick={onSearch}>Agregar</button> 
         
      </div>
   );
}
