import express from "express";
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(cors());
app.use(express.json());

const PORT = 7777;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}❤️`);
});
