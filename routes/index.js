import express from 'express'
import { Router  } from 'express'
import { todosLosJuegos } from '../controllers/gameController.js';
const router = express.Router();

router.get("/",todosLosJuegos)

router.get("/json",todosLosJuegos)

export default router;