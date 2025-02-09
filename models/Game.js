// models/Game.js
import { Sequelize } from "sequelize";
import { db } from "../config/db.js";

export const Game = db.define('Game', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    img: {
        type: Sequelize.STRING
    },
    bgImage: {
        type: Sequelize.STRING
    },
    descriptionText: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'games'
});
