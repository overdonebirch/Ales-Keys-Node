import { db } from "../config/db.js";
import { Sequelize } from "sequelize";

export const Platform = db.define("Platform",{
    name:{
        type: Sequelize.STRING
    }
})