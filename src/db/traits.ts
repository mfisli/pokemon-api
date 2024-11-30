import mongoose from "mongoose";

interface Trait {
    name: string,
    elementalTypeIdList: string[],
}

const TraitSchema = new mongoose.Schema<Trait>({
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    elementalTypeIdList: {
        type: [String],
        default: []
    }
});

const Trait = mongoose.model("Trait", TraitSchema);

export default Trait;