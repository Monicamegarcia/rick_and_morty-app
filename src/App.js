import './App.css';

import Cards from './components/Cards.jsx';
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
//import characters, { Rick } from './data.js';
import background from "./img/starry-night-sky.jpg";
import {useState} from "react";
import axios from "axios";
import {Routes, Route, useLocation} from "react-router-dom";
import Form from "./components/Form.jsx";

const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY="";

function App() {
   const location = useLocation();
   //useLocation da un objeto y tiene 
   //varias propiedades, pathname
   //porque necesito saber en que ruta esta
   //posicionado el usuario
   const [characters,setCharacters] = useState ([]);

   function onSearch(id) {
      axios(`${URL_BASE}/${id}?key=${API_KEY}`)
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
        {
         location.pathname !== "/" && <Nav onSearch={onSearch}/>
        }
         
         <Routes>
          <Route path="/" element={<Form/>} />
          <Route path="/home" element={ <Cards onClose= {onClose} characters={characters} /> }/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Detail:id" element={<Detail/>}/>
         </Routes>
    
      </div>
   );
}

export default App;
//<SearchBar onSearch={(characterID) => window.alert(characterID)} />