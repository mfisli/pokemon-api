import mongoose from "mongoose";

export interface TrainerType {
    firstName: string,
    lastName: string,
    gender?: string,
    bio?: string,
    pokemon?: any[],
    traitIdList?: any[],
    flawIdsList?: any[]
}

const TrainerSchema = new mongoose.Schema<TrainerType>({
    firstName: {
        type: String,
        required: [true, "First name is required."],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."],
    },
    gender: {
        type: String
    },
    bio: {
        type: String
    },
    pokemon: {
        type: Array,
        default: []
    },
    traitIdList: {
        type: Array,
        default: []
    },
    flawIdsList: {
        type: Array,
        default: []
    }
});

const Trainer = mongoose.model("Trainer", TrainerSchema);

export default Trainer;