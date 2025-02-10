import { Sequelize } from "sequelize";
import { db } from "../config/db.js";

export const Cart = db.define('Cart',{
    idItem : {
        type : Sequelize.INTEGER,
        primaryKey : true,
        field : "idItem"
    },
    idGame:{
        type: Sequelize.INTEGER,
        allowNull:false
    }
},{
    timestamps : false,
    tableName:'cart'
})
