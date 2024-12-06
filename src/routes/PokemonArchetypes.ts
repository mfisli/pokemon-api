import { Router } from 'express';
import {
    getPokemonArchetypeList,
    getPokemonArchetype,
    createPokemonArchetype,
    updatePokemonArchetype,
    deletePokemonArchetype
} from '../handlers/pokemonArchetypes.js'

const router = Router();

router.get('/', getPokemonArchetypeList);
router.get('/:id', getPokemonArchetype);
router.post('/', createPokemonArchetype);
router.patch('/:id', updatePokemonArchetype);
router.delete('/:id', deletePokemonArchetype);

export default router;