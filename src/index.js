import express from "express";
import cors from "cors";

import dotenv from "dotenv";
dotenv.config();

import UserRoutes from "./routes/UserRoutes.js";

const app = express();

app.use(express.json());

app.use(cors({ credentials: true, origin: process.env.ORIGIN_HOST }));

app.use(express.static("public"));

app.use("/users", UserRoutes);

app.listen(process.env.PORT, console.log("App funcionando!"));