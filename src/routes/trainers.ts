import { Router } from 'express';
import { createTrainer,
    deleteTrainer,
    getGeneratedTrainerList,
    getTrainer,
    getTrainerList,
    updateTrainer
} from '../handlers/trainers.js';

const router = Router();

router.get('/', getTrainerList);
router.get('/generate', getGeneratedTrainerList);
router.get('/:id', getTrainer);
router.post('/', createTrainer);
router.patch('/:id', updateTrainer);
router.delete('/:id', deleteTrainer);

export default router;