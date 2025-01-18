import { Game } from "../models/Game.js";
import { System } from "../models/System.js";
import { Platform } from "../models/Platform.js";
import { GameSystem } from "../models/GameSystem.js";
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

const sistemas = async (req,res) => {

    try{
        const sistemas = await GameSystem.findAll();
        res.json(sistemas);
    }
    catch(error){
        console.log(error)
    }
}

const juegosFiltrados = async(req,res) => {
    const {system_id} = req.query;
    console.log(system_id); 
    try{
        let juegos = await Game.findAll({
            include:{
                model:System,
                where: {id : system_id}
            }
        });
        if(!juegos){
            juegos = await Game.findAll();
        }
       
        res.json(juegos) ;
    }
    catch(error){
        return error
    }
}



export {paginaInicio,todosLosSistemas,todasLasPlataformas, sistemas, juegosFiltrados}