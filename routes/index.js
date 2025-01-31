import express from 'express'
import { Router  } from 'express'
import { 
paginaInicio,
paginaJuego,
todosLosSistemas,
todasLasPlataformas,
todosLosGeneros,
sistemas,
juegosFiltrados } from '../controllers/gameController.js';

const router = express.Router();

router.get("/",paginaInicio)
router.get("/todosLosSistemas",todosLosSistemas)
router.get("/todasLasPlataformas",todasLasPlataformas)
router.get("/todosLosGeneros",todosLosGeneros)
router.get("/sistemas",sistemas)
router.get("/juegosFiltrados",juegosFiltrados)
router.get("/paginaJuego",paginaJuego)


export default router;