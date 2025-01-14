import Sequalize from 'sequelize';

const db = new Sequalize('aleskeys','Ale','systerk1',{
    host:'localhost',
    port: '3306',
    dialect: 'mysql',
    define:{
        timestamps: false
    },
    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1000,
    },
    operatorAliases: false
})

const testConnection = async() => {
    try{
        await db.authenticate();
        console.log("DB conectada correctamente")
    }
    catch(error){
        console.log(error)
    }
}

export{
    db,
    testConnection
}