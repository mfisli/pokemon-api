import { Router } from 'express';

import {
    getPokemonList,
    getPokemon,
    createPokemon,
    updatePokemon,
    deletePokemon,
    getGeneratedPokemonList
} from '../handlers/pokemon.js';

const router = Router();

router.get('/', getPokemonList);
router.get('/:id', getPokemon);
router.post('/', createPokemon);
router.post('/generate', getGeneratedPokemonList);
router.patch('/:id', updatePokemon);
router.delete('/:id', deletePokemon);

export default router;
