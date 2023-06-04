const {server} = require ("./app");

const PORT = 3001;

server.listen (PORT, ()=> {
    console.log (`server raised in: ${PORT}`);
});

//se modulariza con app por los test
//no puedo tener el listen en el mismo archivo que estoy testeando,
//se hace un bucle infinito con los tests