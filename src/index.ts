import express, { NextFunction, Request, Response } from "express";
import { createServer } from "http";
import cors from 'cors';
import mongoose from "mongoose";
import trainersRouter from "./routes/trainers.js"
import traitsRouter from "./routes/traits.js";
import elementalTypesRouter from "./routes/elementalTypes.js";
import secrets from "./secrets.js";

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
app.use(
    cors()
)
app.use(express.json());

app.use('/api/trainers', trainersRouter);
app.use('/api/traits', traitsRouter);
app.use('/api/elementalTypes', elementalTypesRouter);

app.get("/test", (req: Request, res: Response, next: NextFunction) => {
    res.send(new Date().toLocaleTimeString() + " server is up");
})

const server = createServer(app);

server.listen(port, () => {
    console.log(`Running on port ${port}`);
});