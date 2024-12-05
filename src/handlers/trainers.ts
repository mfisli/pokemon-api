import { Request, Response } from "express";
import Trainer, { TrainerType } from "../db/trainers.js";
import Trait from "../db/traits.js";
import { getTrainerList as getFakeTrainerList } from "../utils/faker.js";
import mongoose from "mongoose";

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
        const body: TrainerType = req.body;
        body.traitIdList = (body.traitIdList || [])
            .map(item => new mongoose.Types.ObjectId(item));
        console.log("createTrainer body", body);
        const item = await Trainer.create(body);
        res.status(200).json(item);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}

export const updateTrainer = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const body: TrainerType = req.body;
        body.traitIdList = (body.traitIdList || [])
            .map(item => new mongoose.Types.ObjectId(item));
        console.log("updateTrainer body", body);
        const item = await Trainer.findByIdAndUpdate(id, body);
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

export const getGeneratedTrainerList = async (req: Request, res: Response) => {
    try {
        const traitList = await Trait.find({});
        const list = await getFakeTrainerList(
            3,
            traitList.map(item => item._id)
        );
        console.log("getGeneratedTrainerList", list);
        res.status(200).json(list);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
}