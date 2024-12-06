import { Router } from 'express';

import {
    getPokemonList,
    getPokemon,
    createPokemon,
    updatePokemon,
    deletePokemon
} from '../handlers/pokemon.js';

const router = Router();

router.get('/', getPokemonList);
router.get('/:id', getPokemon);
router.post('/', createPokemon);
router.patch('/:id', updatePokemon);
router.delete('/:id', deletePokemon);

export default router;
