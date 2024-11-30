import { Request, Response } from "express";
import Trainer from "../db/trainers.js";

export const getTrainerList = async (req: Request, res: Response) => {
    try {
        const list = await Trainer.find({});
        res.status(200).json(list);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const getTrainer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await Trainer.findById(id);
        if (!item) {
            res.status(404).json({ message: 'Trainer not found'});
        } else {
            res.status(200).json(item);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const createTrainer = async (req: Request, res: Response) => {
    try {
        const item = await Trainer.create(req.body);
        res.status(200).json(item);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const updateTrainer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await Trainer.findByIdAndUpdate(id, req.body);
        if (!item) {
            res.status(404).json({ message: 'Trainer not found'});
        } else {
            const update = await Trainer.findById(id);
            res.status(200).json(update);
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteTrainer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const item = await Trainer.findByIdAndDelete(id);
        if (!item) {
            res.status(404).json({ message: 'Trainer not found'});
        } else {
            res.status(200).json({ message: 'Deleted trainer ' + id})
        }
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}