export default function SearchBar({onSearch}) { //props es un objeto que se le hace destructuring
    //el boton tiene un evento onClick, a esa propiedad oncClick le agrego una funcion, se pone sin ejecutar
   return (
      <div>
         <input type='search' />
         <button onClick={onSearch}>Agregar</button> 
         
      </div>
   );
}
