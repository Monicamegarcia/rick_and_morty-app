//hay que hacer rutas y modularizarlas en distintos archivos y aca te pide todo en un solo archivo

const {login} = require ("../controllers/login");

const {getCharById} = require ("../controllers/getCharById");

const { postFav, deleteFav} = require ("../controllers/handleFavorites");

const router = require ("express").Router(); //forma resumida, se ahorra hacer una const

router.get("/character/:id", (req, res) => {
    getCharById(req, res);
});

router.get( "/login", (req, res)=>{
    login(req, res);
});

//router.get("/login", login); forma abreviada, tambien se puede hacer asi, colocando la fn login directamente
//estoy diciendo en la ruta get, al ingresar login, se ejecuta login y de manera automatica le paso req y res
//y no necesito ejecutarla, tampoco pongo el callback

router.post("/fav", (req, res)=>{
    postFav(req,res);
});

router.delete("/fav/:id", (req, res)=>{
    deleteFav(req, res);
});

module.exports= router;