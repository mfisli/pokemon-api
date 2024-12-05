import mongoose, { Types } from "mongoose";

export interface TraitType {
    name: string,
    elementalTypeIdList: Types.ObjectId[],
}

const TraitSchema = new mongoose.Schema<TraitType>({
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    elementalTypeIdList: {
        type: [Types.ObjectId],
        default: []
    }
});

const Trait = mongoose.model("Trait", TraitSchema);

export default Trait;