import express from 'express'
import router from "./routes/index.js"
import { testConnection } from './config/db.js';
const app = express();

testConnection();

const port = process.env.PORT || 4000;

// Desde la pagina principal se agrega router
app.use("/",router)

//Habilitar el motor de plantillas:
app.set("view engine","pug")

//Definir la carpeta publica:
app.use(express.static("public"))

app.listen(port, () => {
    console.log(`Se está escuchando el puerto ${port}`)
})