import SearchBar from "./SearchBar.jsx"

export default function Nav ({onSearch}) {
    return (
     <nav>
         <SearchBar onSearch= {onSearch}/> 
     </nav>
        

    )
}