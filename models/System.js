import { db } from "../config/db.js";
import { Sequelize } from "sequelize";

export const System = db.define('System',{
    name:{
        type: Sequelize.STRING
    }
})