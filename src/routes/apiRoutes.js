import express from 'express';
import { evaluateChecklist } from '../controllers/checkListController.js';

const router = express.Router();

router.get('/evaluate', evaluateChecklist);

export default router;