import { Schema,  Types, model } from "mongoose";

export interface IPokemonArchetype {
    numberId: number;
    name: string;
    height: number;
    weight: number;
    sound: string;
    image: string;
    elementalTypeIdList: Types.ObjectId[];
    // moveIdList: Types.ObjectId[];
}

export const PokemonArchetypeSchema = new Schema<IPokemonArchetype>({
    numberId: {
        type: Number,
    },
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    height: {
        type: Number,
    },
    weight: {
        type: Number,
    },
    sound: {
        type: String,
    },
    image: {
        type: String,
    },
    elementalTypeIdList: {
        type: [Types.ObjectId],
        default: []
    },
});

const PokemonArchetype = model("PokemonArchetype", PokemonArchetypeSchema);

export default PokemonArchetype;