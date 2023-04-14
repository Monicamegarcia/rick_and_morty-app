import './App.css';

import Cards from './components/Cards.jsx';
import Nav from "./components/Nav.jsx";
//import characters, { Rick } from './data.js';
import background from "./img/starry-night-sky.jpg";
import {useState} from "react";
import axios from "axios";

function App() {
   const [characters,setCharacters] = useState ([]);

   function onSearch(id) {
      axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         } else {
            window.alert('¡No hay personajes con este ID!');
         }
      });
   }

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !== Number(id))
     setCharacters(charactersFiltered)
     
   }
   return (
      <div style={{ backgroundImage: `url(${background})` }} className='App'>
         <Nav onSearch={onSearch}/>
         <div>
            <Cards onClose= {onClose} characters={characters} />  
         </div>
        
      </div>
   );
}

export default App;
//<SearchBar onSearch={(characterID) => window.alert(characterID)} />