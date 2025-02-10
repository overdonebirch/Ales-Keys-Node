import express from 'express'
import router from "./routes/index.js"
import { db } from './config/db.js'; import { Game } from './models/Game.js'; import { System } from './models/System.js'; import { GameSystem } from './models/GameSystem.js'; import './models/associations.js'
const app = express();



const port = process.env.PORT || 4000;
app.use(express.json());
app.use(express.static("public"))
// Desde la pagina principal se agrega router
app.use("/",router)

//Habilitar el motor de plantillas:
app.set("view engine","pug")

//Definir la carpeta publica:



app.listen(port, () => {
    console.log(`Se está escuchando el puerto ${port}`)
})