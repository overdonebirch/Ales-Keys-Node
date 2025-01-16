import { Game } from "../models/Game.js";
import { System } from "../models/System.js";
import { Platform } from "../models/Platform.js";
import { where } from "sequelize";

const paginaInicio = async (req,res) => {
    try{
        let allGames = await Game.findAll();
        res.render('index',{
            allGames
        })

    }   
    catch(error){
        console.log(error)
    }
}

const todosLosSistemas = async (req,res) => {
    try{
        const sistemas = await System.findAll();
        res.json(sistemas) ;
    }
    catch(error){
        return error
    }
}
const todasLasPlataformas = async (req,res) => {
    try{
        const plataformas = await Platform.findAll();
        res.json(plataformas) ;
    }
    catch(error){
        return error
    }
}



export {paginaInicio,todosLosSistemas,todasLasPlataformas}