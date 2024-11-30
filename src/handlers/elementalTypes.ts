import { Request, Response } from "express";
import ElementalType from "../db/elementalTypes.js";

export const getElementalTypeList = async (req: Request, res: Response) => {
    try {
        const list = await ElementalType.find({});
        res.status(200).json(list);
    } catch (error: any) {
        res.status(500).json({ message: error })
    }
};

export const getElementalType = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await ElementalType.findById(id);
        if (!item) {
            res.status(404).json({ message: 'Elemental Type not found'});
        } else {
            res.status(200).json(item);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const createElementalType = async (req: Request, res: Response) => {
    try {
        const item = await ElementalType.create(req.body);
        res.status(200).json(item);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const updateElementalType = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await ElementalType.findByIdAndUpdate(id, req.body);
        if (!item) {
            res.status(404).json({ message: 'Elemental Type not found'});
        } else {
            const update = await ElementalType.findById(id);
            res.status(200).json(update);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteElementalType = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await ElementalType.findByIdAndDelete(id);
        if (!item) {
            res.status(404).json({ message: 'Elemental Type not found'});
        } else {
            res.status(200).json({ message: 'Deleted Elemental Type ' + id})
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}