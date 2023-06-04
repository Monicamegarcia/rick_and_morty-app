import './App.css';

import Cards from './components/Cards.jsx';
import Nav from "./components/Nav.jsx";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
//import characters, { Rick } from './data.js';
import background from "./img/starry-night-sky.jpg";
import {useState, useEffect} from "react";
import axios from "axios";
import {Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Form from "./components/Form.jsx";
import Favourites from "/components/Favourites";


const URL_BASE = "https://be-a-rym.up.railway.app/api/character";
const API_KEY="";

const email ="monicamegar@gmail.com";
const password = "123asd";
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location = useLocation();
   //useLocation da un objeto y tiene 
   //varias propiedades, una es pathname
   //porque necesito saber en que ruta esta
   //posicionado el usuario
   const navigate = useNavigate ();
   const [characters, setCharacters] = useState ([]);
   const [access, setAccess] = useState(false);
   

   const login = async (userData) => {
      try {
       const { email, password } = userData;
       const {data} = await axios(URL + `?email=${email}&password=${password}`);
   
       const { access } = data;
       setAccess(access);
       access && navigate('/home');

      } catch (error) {
         console.log (error.message);
      }
     
   }

  // const login = (userData) => {
    //  if (userData.email === email && userData.password === password) {
      //   setAccess(true);
      //   navigate("/home");
     // }
   //} esta fn la reemplazamos con lo que pide el CR de backend express
   //esta nueva fn login le estamos enviando info al back, la url localhost es la ruta a nuestro back
   //le concatena la query. con destructuring de data se ahorra linea de response

   //const login: como se entera mi form que hay una funcion que se llama
   //login, a la que le tiene que pasar props?
   //login pasar por props a form, lo busco en app donde esta
   //renderizada aca y login={login}
   //userData, donde se ponen en login stoy recibiendo un objeto
   //const login = ({email, password}), se pone userData es el obj
   //sus propiedades serian email y password

   //si no hago el login, con cualquier mail se conecta
   //es de seguridad (simulado)
   //es mejor usar && o un ternario para esta funcion?
   //en este caso, en el que solo se hace esto, sirve mas el &&
   //con ternario, habria que poner else (:) y me quedaria sin uso
   //el && nos sirve para verificar cuando no necesito un else
   //si yo todo lo que cargue esta bien, se redirige al home, ya que
   //da el acceso, para eso es navigate

   useEffect (() => {
      !access && navigate ("/")

   }, [access, navigate])

   //usseEffect: si no se pone el array de dependencia [], se crea un loop infinito
   //por eso el useEffect siempre va con el []
   //el ciclo de vida que simula es el update
   //le decimos, va a estar pendiente de access
   //porque cuando cambie, se va a cambiar lo que esta es funcion
   //useEffect. access inicialmente es false, luego que sucede?
   //completo los datos segun login y sta todo todo bien, setacces true
   //ah hubo un cambio en el access, viene y ejecuta:
   //!access && navigate ("/"), esto verifica que si access esta en false
   //entonces no me va a llevar a otra ruta que no sea "/", no puedo entrar
   //si da true esta no se ejecuta, esto obliga a completar el login

   const onSearch = async (id) => {
      try {
       const {data}=  await axios(`https://rickandmortyapi.com/api/character/${id}`);
  
         if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
         }; 
         
      } catch (error) {
          alert('¡No hay personajes con este ID!');
      }

   };

   const onClose = (id) => {
      const charactersFiltered = characters.filter(character =>
         character.id !== Number(id))
     setCharacters(charactersFiltered)
     
   }
   return (
      <div style={{ backgroundImage: `url(${background})` }} className='App'>
        {
         location.pathname !== "/" && <Nav onSearch={onSearch} setAccess= {setAccess} />
        }
         
         <Routes>
          <Route path="/" element={<Form login= {login}/> }/>
          <Route path="/home" element={ <Cards onClose= {onClose} characters={characters} /> }/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Detail:id" element={<Detail/>}/>
          <Route path= "/Favourites" element={<Favourites/>}/>
         </Routes>
   
      </div>
   );
}

// "/Detail:id", ojo que no sea "/Detail/:id"
export default App;
//<SearchBar onSearch={(characterID) => window.alert(characterID)} />