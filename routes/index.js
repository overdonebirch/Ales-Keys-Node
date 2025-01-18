import express from 'express'
import { Router  } from 'express'
import { paginaInicio, todosLosSistemas,todasLasPlataformas, sistemas,juegosFiltrados } from '../controllers/gameController.js';
const router = express.Router();

router.get("/",paginaInicio)
router.get("/todosLosSistemas",todosLosSistemas)
router.get("/todasLasPlataformas",todasLasPlataformas)
router.get("/sistemas",sistemas)
router.get("/juegosFiltrados",juegosFiltrados)


export default router;