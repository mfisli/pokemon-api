import { Request, Response } from "express";
import Trait, { TraitType } from "../db/traits.js";
import mongoose from "mongoose";

export const getTraitList = async (req: Request, res: Response) => {
    try {
        const list = await Trait.find({});
        res.status(200).json(list);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const getTrait = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await Trait.findById(id);
        if (!item) {
            res.status(404).json({ message: 'Trait not found'});
        } else {
            res.status(200).json(item);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const createTrait = async (req: Request, res: Response) => {
    try {
        const body: TraitType = req.body;
        body.elementalTypeIdList = body.elementalTypeIdList
            .map(item => new mongoose.Types.ObjectId(item));
        console.log("createTrait body", body);
        const item = await Trait.create(body);
        res.status(200).json(item);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const updateTrait = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const body: TraitType = req.body;
        body.elementalTypeIdList = body.elementalTypeIdList
            .map(item => new mongoose.Types.ObjectId(item));
        const item = await Trait.findByIdAndUpdate(id, body);
        if (!item) {
            res.status(404).json({ message: 'Trait not found'});
        } else {
            const update = await Trait.findById(id);
            res.status(200).json(update);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteTrait = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await Trait.findByIdAndDelete(id);
        if (!item) {
            res.status(404).json({ message: 'Trait not found'});
        } else {
            res.status(200).json({ message: 'Deleted trait ' + id})
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}