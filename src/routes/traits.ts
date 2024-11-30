import { Router } from 'express';
import {
    getTraitList,
    getTrait,
    createTrait,
    updateTrait,
    deleteTrait
} from "../handlers/traits.js"

const router = Router();

router.get('/', getTraitList);
router.get('/:id', getTrait);
router.post('/', createTrait);
router.patch('/:id', updateTrait);
router.delete('/:id', deleteTrait);

export default router;
