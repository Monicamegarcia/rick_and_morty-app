const validation = (userData) => {
    const errors = {};
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(userData.email)) {
        errors.email = "el email ingresado no es valido";
    }
    if(!userData.email){ //es igual a decir userData.email.length === ""
       errors.email = "debe ingresar un email";
    }
    if(userData.email.length > 35){
        errors.email = "el email no debe superar los 35 caracteres"
    }

    if (!/.*\d+.*/.test(userData.password)) {
        errors.password = "la contraseña debe contener al menos un numero"
    }

    if (userData.password.length < 6 || userData.password.length > 10) {
        errors.password = "la contraseña debe tener una longitud entre 6 y 10 caracteres"
    }
//test es un metodo de las regex
    return errors;
}

export default validation;

//los estados locales no se importan ni exportan
//se pasa por parametro
//se crea un objeto vacio errors porque 
//"si el email que ingreso el usuario, que es userData.email
//no es correcto, errors.mail, agrego esta propiedad
//ahora si se ingreso un mail valido, no se crea la prop
//en el estado errors"
//construimos un objeto que va a tener propiedades email y password,
//si hay errores
//el objeto esta vacio si no hay errores
//hay que retonarlo
//en form, validation retorna el objeto (dentro de setErrors)
//cada vez que en form, haya un cambio en los inputs
//se dispara el evento y modificamos userData, 
//ademas quiero validar esos cambios a medida que el usuario escribe
//por eso se llama a validation dentro de handleChange