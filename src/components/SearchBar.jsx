import style from "./SearchBar.module.css"

export default function SearchBar({onSearch}) { //props es un objeto que se le hace destructuring
    //el boton tiene un evento onClick, a esa propiedad oncClick le agrego una funcion, se pone sin ejecutar
   return (
      <div className= {style.divSearchBar}>
         <input type='search' />
         <button className={style.buttonSearchBar} onClick={onSearch}>Agregar</button> 
         
      </div>
   );
}
