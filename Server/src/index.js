const {server} = require ("./app");
const { conn } = require('./DB_connection');

const PORT = 3001;

conn.sync({force: true}).then(()=>{
    server.listen (PORT, ()=> 
    console.log (`server raised in: ${PORT}`))
})

//conn es database

//conn.sync es una promesa, se llama al servidor que hay dos formas de hacerlo

//se modulariza con app por los test
//no puedo tener el listen en el mismo archivo que estoy testeando,
//se hace un bucle infinito con los tests