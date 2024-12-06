import { Router } from 'express';

import {
    createElementalType,
    deleteElementalType,
    getElementalType,
    getElementalTypeList,
    updateElementalType
} from '../handlers/elementalTypes.js';

const router = Router();

router.get('/', getElementalTypeList);
router.get('/:id', getElementalType);
router.post('/', createElementalType);
router.patch('/:id', updateElementalType);
router.delete('/:id', deleteElementalType);

export default router;
