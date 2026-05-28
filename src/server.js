import express from "express";
import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";

import { router as apiRoutes } from "./routes/index.js";
import { connectDB } from "./config/mongodb.js";
import { Limiter } from "./middlewares/rateLimit.js";

const app = express();

app.use(helmet());
app.use(cors());

app.use(Limiter);

app.use(express.json());
app.use(express.static("public")); // will remove after upload to cloud

app.use("/api", apiRoutes);

app.use((error, req, res, next) => {
  console.error(error.stack);
  res.status(error.status || 500).json({
    success: false,
    message: error.message || "Internal Server Error",
    path: req.originalUrl,
    method: req.method,
    timestamp: new Date().toISOString(),
    stack: error.stack,
  });
});

const PORT = 7777;

await connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}❤️`);
});
