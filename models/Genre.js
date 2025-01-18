import { db } from "../config/db.js";
import { Sequelize } from "sequelize";

export const Genre = db.define('Genre',{
    name:{
        type: Sequelize.STRING
    }
},{
    tableName:'genres'
})
