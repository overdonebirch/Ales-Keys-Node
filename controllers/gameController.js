import { Game } from "../models/Game.js";
import { where } from "sequelize";

const todosLosJuegos = async (req,res) => {
    try{
        let allGames = await Game.findAll({limit : 3});

        console.log(allGames)
        res.render('index',{
            allGames
        })

    }   
    catch(error){
        console.log(error)
    }
}

export {todosLosJuegos}