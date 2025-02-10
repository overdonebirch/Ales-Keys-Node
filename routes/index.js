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

import { verCarrito, añadirJuegoCarrito, eliminarJuegoCarrito } from '../controllers/cartController.js';

const router = express.Router();

router.get("/",paginaInicio)
router.get("/todosLosSistemas",todosLosSistemas)
router.get("/todasLasPlataformas",todasLasPlataformas)
router.get("/todosLosGeneros",todosLosGeneros)
router.get("/sistemas",sistemas)
router.get("/juegosFiltrados",juegosFiltrados)
router.get("/paginaJuego",paginaJuego)


//Carrito : 

router.get("/carrito",verCarrito)
router.post("/anadirJuegoCarrito",añadirJuegoCarrito)
router.destroy("/eliminarJuegoCarrito",eliminarJuegoCarrito)


export default router;