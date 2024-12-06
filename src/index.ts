import express, { Request, Response } from "express";
import { createServer } from "http";
import cors from 'cors';
import mongoose from "mongoose";
import trainersRouter from "./routes/trainers.js"
import traitsRouter from "./routes/traits.js";
import elementalTypesRouter from "./routes/elementalTypes.js";
import pokemonArchetypesRouter from "./routes/PokemonArchetypes.js";
import pokemonRouter from "./routes/pokemon.js";
import secrets from "./secrets.js";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// MongoDB
const database = 'pokemon-api';
const query = 'retryWrites=true&w=majority&appName=Cluster0'
const uri = `mongodb+srv://${secrets.userName}:${secrets.password}@Cluster0.ig5jn.mongodb.net/${database}?${query}`;
mongoose.Promise = Promise;
mongoose.connect(uri);
mongoose.connection.on('connected', () => console.log("Mongoose DB Connection Successful"));
mongoose.connection.on('error', (error: Error) => console.error("Mongoose DB Connection Error:", error));

// Express
const port = 3000;
const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/trainers', trainersRouter);
app.use('/api/traits', traitsRouter);
app.use('/api/elementalTypes', elementalTypesRouter);
app.use('/api/pokemonArchetypes', pokemonArchetypesRouter);
app.use('/api/pokemon', pokemonRouter);
app.use('/images/trainers', express.static(__dirname + '/images/trainers'));

app.get("/api/test", (req: Request, res: Response) => {
    res.status(200).json({
        message: `${new Date().toDateString()} ${new Date().toTimeString()} server is up`
    });
})

const server = createServer(app);

server.listen(port, () => {
    console.log(`Running on port ${port}`);
});