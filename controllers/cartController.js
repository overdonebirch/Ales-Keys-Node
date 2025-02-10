import { Cart } from "../models/Cart.js"
import { Game } from "../models/Game.js"
import { where } from "sequelize";
const verCarrito = async (req,res) => {
    const cartItems = await Cart.findAll();

    let gameListPromises = [];

    cartItems.forEach(element => {
        const idGame = element.dataValues.idGame;
        const game = Game.findByPk(idGame);
        gameListPromises.push(game);
    });
    let gameListPromisesResolved = await Promise.all(gameListPromises);
    let gameList = [];
    gameListPromisesResolved.forEach( element => {
        gameList.push(element.dataValues);
    })

    res.render('cart',{
        gameList
    })
}
const añadirJuegoCarrito = async (req,res) => {
    const idGameToInsert = req.body.id;
    const game = await Game.findByPk(idGameToInsert)
    const cartItem = await Cart.create({idGame : idGameToInsert})

}

const eliminarJuegoCarrito = async (req,res) => {
    const gameId = req.params.id;
    try{
        await Cart.destroy({
            where:{
                'idGame' : gameId
            }
        })
        console.log("Se eliminó el juego del carrito correctamente")
        return res.json({ message: "Juego eliminado del carrito" });
    }
    catch(error){
        console.log(error)
    }
}




export {verCarrito,añadirJuegoCarrito,eliminarJuegoCarrito}