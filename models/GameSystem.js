// models/GameSystem.js
import { Sequelize } from "sequelize";
import { db } from "../config/db.js";

export const GameSystem = db.define('GameSystem', {
    game_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'game_id',
        references: {
            model: 'games',
            key: 'id'
        }
    },
    system_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        field: 'system_id',
        references: {
            model: 'systems',
            key: 'id'
        }
    }
}, {
    tableName: 'games_systems',
    timestamps: false
});
