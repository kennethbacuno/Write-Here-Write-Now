import express from "express";
import dotenv from "dotenv";
import http from "http";
import cookieParser from "cookie-parser";
import cors from "cors";

// local imports
import { ConnectDB } from "./db/connect.db.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// app.use(
//   cors({
//     origin: ["http://localhost:5173"], // your Vite React frontend
//     credentials: true,
//   })
// );

app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoutes);

const httpServer = http.createServer(app);

httpServer.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  ConnectDB();
});
