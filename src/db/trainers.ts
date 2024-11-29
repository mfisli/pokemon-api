import mongoose from "mongoose";

interface Trainer {
    firstName: string,
    lastName: string,
    pokemon?: any[],
    traits?: any[],
    flaws?: any[]
}

const TrainerSchema = new mongoose.Schema<Trainer>({
    firstName: {
        type: String,
        required: [true, "First name is required."],
    },
    lastName: {
        type: String,
        required: [true, "Last name is required."],
    },
    pokemon: {
        type: Array,
        default: []
    },
    traits: {
        type: Array,
        default: []
    },
    flaws: {
        type: Array,
        default: []
    }
});

const Trainer = mongoose.model("Trainer", TrainerSchema);

export default Trainer;