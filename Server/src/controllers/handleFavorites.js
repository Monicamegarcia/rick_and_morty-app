let myFavorites = [];

const postFav = (req, res) =>{

    try {
        const character = req.body;

    //se agrega una validacion para evitar un bug, de tener repetidos en el array (estoy hay que hacerlo en varios lugares)
        const characterfound = myFavorites.find(fav => fav.id === character.id);

        if (characterfound) throw Error ("El personaje ya existe en favoritos");
    
        myFavorites.push(character);
        
        return res.status(200).json(myFavorites);
    
    } catch (error) {
        return res.status(404).send(error.message)
    }
    
};

const deleteFav= (req, res) => {
    const {id} = req.params;

    myFavorites = myFavorites.filter((favorite)=>favorite.id !== +id);
    //poniendo el + adelante, se parsea, se transforma en numero, sino es string y no sirve
    
    return res.status(200).json(myFavorites);
    //aca especificamente en estas dos lineas se pisa el array original a proposito,
    //sino hace un bug, porque tengo el array origina y el que genera el filter
    //sino nunca modificamos el original y en este caso no sirve, por eso pide que no se lo declare
    //como const, ya que se va a modificar con cada filter que se haga
};

module.exports = {
    postFav,
    deleteFav
};