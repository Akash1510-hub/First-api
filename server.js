import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import studentRoutes from "./routes/students.js";

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:3000`);
});
