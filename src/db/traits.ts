import mongoose from "mongoose";

interface Trait {
    name: string,
    targetTypeList: string[],
}

const TraitSchema = new mongoose.Schema<Trait>({
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    targetTypeList: {
        type: [String],
        default: []
    }
});

const Trait = mongoose.model("Trait", TraitSchema);

export default Trait;