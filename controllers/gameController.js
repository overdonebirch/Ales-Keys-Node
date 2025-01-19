import { Game } from "../models/Game.js";
import { System } from "../models/System.js";
import { Genre } from "../models/Genre.js";
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

const paginaJuego = async (req,res) => {
    const {game_id} = req.query;
    const game = await Game.findOne({where : {id:game_id}})
    console.log(game.dataValues);
    
    res.render('game',{
        game
    });
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

const todosLosGeneros = async (req,res) => {
    try{
        const generos = await Genre.findAll();
        res.json(generos) ;
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

const juegosFiltrados = async (req, res) => {
    const { system_id, genre_id } = req.query;

    const includeOptions = [];

    if (system_id) {
        includeOptions.push({
            model: System,
            where: { id: system_id }
        });
    }

    if (genre_id) {
        includeOptions.push({
            model: Genre,
            where: { id: genre_id }
        });
    }

    try {
        let juegos = await Game.findAll({
            include: includeOptions
        });
        res.json(juegos);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener los juegos filtrados' });
    }
};



export {
paginaInicio,
paginaJuego,
todosLosSistemas,
todasLasPlataformas, 
todosLosGeneros,
sistemas,
juegosFiltrados
}