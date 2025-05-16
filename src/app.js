import express from "express";
import { router } from "./routes/Router.js";
 export const app = express();

app.use(express.json());
app.use('/api', router);

