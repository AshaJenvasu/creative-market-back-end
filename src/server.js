import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import connectDB from "./config/mongodb.js";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 7777;

await connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}❤️`);
});
