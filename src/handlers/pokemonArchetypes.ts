import { Request, Response } from "express";
import PokemonArchetype, { IPokemonArchetype } from "../db/pokemonArchetypes.js";
import getObjectIdList from "../utils/getObjectIdList.js";

export const getPokemonArchetypeList = async (req: Request, res: Response) => {
    try {
        const list = await PokemonArchetype.find({});
        res.status(200).json(list);
    } catch (error: any) {
        res.status(500).json({ message: error })
    }
};

export const getPokemonArchetype = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await PokemonArchetype.findById(id);
        if (!item) {
            res.status(404).json({ message: "Pokemon Archetype not found"});
        } else {
            res.status(200).json(item);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const createPokemonArchetype = async (req: Request, res: Response) => {
    try {
        const body: IPokemonArchetype = req.body;
        if (!body.elementalTypeIdList || !body.elementalTypeIdList.length) {
            res.status(400).json({ message: "elementalTypeIdList is required" });
        } else {
            body.elementalTypeIdList = getObjectIdList(body.elementalTypeIdList as unknown as string[]);
            const item = await PokemonArchetype.create(body);
            res.status(200).json(item);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const updatePokemonArchetype = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const body: IPokemonArchetype = req.body;
        if (body?.elementalTypeIdList?.length) {
            // TODO: 400 on empty list
            body.elementalTypeIdList = getObjectIdList(body.elementalTypeIdList as unknown as string[]);
        }
        const item = await PokemonArchetype.findByIdAndUpdate(id, body);
        if (!item) {
            res.status(404).json({ message: 'Pokemon Archetype not found'})
        } else {
            const update = await PokemonArchetype.findById(id);
            res.status(200).json(update);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}


export const deletePokemonArchetype = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await PokemonArchetype.findByIdAndDelete(id);
        if (!item) {
            res.status(404).json({ message: 'Pokemon Archetype not found'});
        } else {
            res.status(200).json({ message: `Deleted Pokemon Archetype ${item.name} ${id}`})
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}