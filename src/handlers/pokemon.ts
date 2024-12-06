import { Request, Response } from "express";
import Pokemon, { IPokemon } from "../db/pokemon.js";
import getObjectIdList from "../utils/getObjectIdList.js";
import { Types } from "mongoose";

export const getPokemonList = async (req: Request, res: Response) => {
    try {
        const list = await Pokemon.find({});
        res.status(200).json(list);
    } catch (error: any) {
        res.status(500).json({ message: error })
    }
};

export const getPokemon = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        if (!Types.ObjectId.isValid(id)) {
            res.status(400).json({ message: "Invalid id" });
            return;
        }
        const item = await Pokemon.findById(id);
        if (!item) {
            res.status(404).json({ message: "Pokemon not found" });
        } else {
            res.status(200).json(item);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message })
    }
}

export const createPokemon = async (req: Request, res: Response) => {
    try {
        const body: IPokemon = req.body;
        if (!body.elementalTypeIdList || !body.elementalTypeIdList.length) {
            res.status(400).json({ message: "elementalTypeIdList is required" });
        } else {
            body.elementalTypeIdList = getObjectIdList(body.elementalTypeIdList as unknown as string[]);
            const item = await Pokemon.create(body);
            res.status(200).json(item);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};


export const updatePokemon = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const body: IPokemon = req.body;
        if (body?.elementalTypeIdList?.length) {
            // TODO: 400 on empty list
            body.elementalTypeIdList = getObjectIdList(body.elementalTypeIdList as unknown as string[]);
        }
        const item = await Pokemon.findByIdAndUpdate(id, body);
        if (!item) {
            res.status(404).json({ message: 'Pokemon not found'})
        } else {
            const update = await Pokemon.findById(id);
            res.status(200).json(update);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deletePokemon = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await Pokemon.findByIdAndDelete(id);
        if (!item) {
            res.status(404).json({ message: 'Pokemon not found'});
        } else {
            res.status(200).json({ message: `Deleted Pokemon ${item.name} ${id}`})
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}