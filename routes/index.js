import express from 'express'
import { Router  } from 'express'
import { paginaInicio, todosLosSistemas,todasLasPlataformas } from '../controllers/gameController.js';
const router = express.Router();

router.get("/",paginaInicio)
router.get("/todosLosSistemas",todosLosSistemas)
router.get("/todasLasPlataformas",todasLasPlataformas)


export default router;