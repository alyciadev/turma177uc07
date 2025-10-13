import express from 'express';
import Livrocontroller from '../controllers/livrosController.js';

const router = express.Router();

router.get ('/',Livrocontroller.listar);
router.post('/',Livrocontroller.criar);


export default router;
