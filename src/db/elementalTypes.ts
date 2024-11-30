import mongoose from "mongoose";

interface ElementalType {
    name: string;
    color: string;
}

const ElementalTypeSchema = new mongoose.Schema<ElementalType>({
    name: {
        type: String,
        required: [true, "Name is required"]
    },
    color: {
        type: String,
        default: '#9FA19F'
    }
});

const ElementalType = mongoose.model("ElementalType", ElementalTypeSchema);

export default ElementalType;
