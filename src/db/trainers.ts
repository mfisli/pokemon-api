import mongoose, { Types } from "mongoose";

export interface TrainerType {
    firstName: string,
    lastName: string,
    image?: string,
    gender?: string,
    bio?: string,
    pokemonIdList?: Types.ObjectId[],
    traitIdList?: Types.ObjectId[],
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
    image: {
        type: String
    },
    gender: {
        type: String
    },
    bio: {
        type: String
    },
    pokemonIdList: {
        type: [Types.ObjectId],
        default: []
    },
    traitIdList: {
        type: [Types.ObjectId],
        default: []
    },
    flawIdsList: {
        type: Array,
        default: []
    }
});

const Trainer = mongoose.model("Trainer", TrainerSchema);

export default Trainer;