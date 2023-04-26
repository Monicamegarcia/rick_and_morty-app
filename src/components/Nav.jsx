import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";


export default function Nav ({onSearch, setAccess}) {
   
   const handleLogOut = () => {
    setAccess(false);
    
   }
   
    return (
     <nav>
         <SearchBar onSearch= {onSearch}/> 
         <button>
            <Link to="/About">About</Link>
         </button>
         <button>
            <Link to="/Home">Home</Link>
         </button>
         <button onclick={handleLogOut}>Log Out</button>
     </nav>
    )
}

//los estados se pasan por props, no por expprt
//es lo que pasa con access y setAccess,
//los pase por props en App.js y de ahi los mande aca
//la funcion nav
//me traje el estado y la funcion para modificar el estado
//al final no es necesario useNavigate, ni access
//por eso se borran
//para modificar el estado, solo necesito a setAccess
//funciona porque en App tenemos el path location, 
//seteado en "/"