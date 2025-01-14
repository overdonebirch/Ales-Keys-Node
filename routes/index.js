import express from 'express'
import { Router  } from 'express'

const router = express.Router();

router.get("/",(req,res) => {
    res.render('index')  
})

router.get("/prueba",(req,res) => {
    res.send("Pagina de prueba")  
})

export default router;