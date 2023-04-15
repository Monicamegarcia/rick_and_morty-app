import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";

export default function Nav ({onSearch}) {
    return (
     <nav>
         <SearchBar onSearch= {onSearch}/> 
         <Link to="/About">
            <button>About</button>
         </Link>
         <Link to="/Home">
            <button>Home</button>
         </Link>
         
         
     </nav>
        

    )
}