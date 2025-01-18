import { db } from "../config/db.js";
import { Sequelize } from "sequelize";
import { Genre } from "./Genre.js";
import { Game } from "./Game.js";

export const GameGenre = db.define('GameGenre',{
    game_id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        field:'game_id',
        references:{
            model : 'games',
            key: 'id'
        }
    },
    genre_id : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        field:'genre_id',
        references:{
            model : 'genres',
            key: 'id'
        }
    }
},{
    tableName: 'games_genres'
})