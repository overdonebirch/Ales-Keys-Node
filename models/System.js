// models/System.js
import { Sequelize } from "sequelize";
import { db } from "../config/db.js";

export const System = db.define('System', {
    name: {
        type: Sequelize.STRING
    }
}, {
    tableName: 'systems'
});
