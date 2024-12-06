import { model, Schema, Types } from "mongoose";
import { IPokemonArchetype } from "./pokemonArchetypes.js";

export const pokemonStatuses = {
    wild: "wild",
    feral: "feral",
    tame: "tame"
} as const;

export interface IPokemon extends IPokemonArchetype {
    nickName: string;
    status: typeof pokemonStatuses[keyof typeof pokemonStatuses]
}

// TODO: replace with discriminators
export const PokemonSchema = new Schema<IPokemon>({
    numberId: {
        type: Number,
    },
    name: {
        type: String,
        required: [true, "Name is required."],
    },
    nickName: {
        type: String
    },
    status: {
        type: String,
        enum: Object.values(pokemonStatuses),
        required: [true, "Status is required."],
        default: pokemonStatuses.wild
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

const Pokemon = model("PokemonSchema", PokemonSchema);

export default Pokemon;