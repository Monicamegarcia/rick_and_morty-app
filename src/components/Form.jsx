import {useState} from "react";
import validation from "../Validation/validation.js";

export default function Form (){

    const [errors, setErrors] = useState({})
    
    const [userData, setUserData] = useStete ({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors (validation ({
            ...userData,
            [event.target.name]: event.target.value

        }))
    }

    return (
        <form > 
            <label htmlFor="email">Email:</label>
            <input type="text" name="email" value={userData.email} onChange={handleChange} />
            {errors.email && <p style={{color: "white"}}> {errors.email}</p>}
            <hr/>
            <label htmlFor="password">Password:</label>
            <input type="text" name="password" value={userData.password} onChange={handleChange} />
            {errors.password && <p style={{color:"white"}} >{errors.password}</p>}
            <button>Submit</button>
        </form>
    )
}
//htmlFor servia para referenciar al input al label
//entonces en el input tengo que agregar el atributo
//name. htmlFor y name debe ser iguales
//se debe bindear el input con el estado, ya que el estado
//y el input deben ser iguales, para eso se usa value y una funcion
//en este caso un "manejador" onhandlechange
//asi le aviso al estado que va a ser igual al input
//se agrega un evento
//el onchange, en el input es el que eschucha los cambios,
//ante cada cambio que haga el usuario en el input, se va 
//a ejecutar esta funcion handleChange, y esta se encarga de
//avisarle al estado const [userData,..]
//en este caso piso el estado y por eso se retorna
//un objeto
//los brackets notation, dentro del objeto que se pone dentro de 
//setUserData (en la funcion handle), tiene una propiedad que es
//variable, por eso se usa bracket, que no la conozco. no se si
//se va a modificar por ejemplo name o password, en este caso
//no se va a tener una funcion por cada propiedad a cambiar
//por eso el name al input, es igual que las propiedades del 
//estado

//esto {errors.email && <p>{errors.email}</p>} significa
//si en el estado errors hay una propiedad email, entonces
//mostrala