import express from "express";
import dotenv from "dotenv";
import http from "http";
import { connectDB } from "./db/connect.db.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
