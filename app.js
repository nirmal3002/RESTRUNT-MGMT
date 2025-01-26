import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import {dbConnection }from "./Database/db.js"
import { errorMiddleware } from "./Middleware/error.js";
import reservationRouter from "./routes/reservationRoute.js";
import path from 'path';
import { fileURLToPath } from 'url';



const app = express()
dotenv.config({ path: "./config/config.env" });
app.use(
    cors({
      origin:"http://localhost:5173",
      methods: ["GET","POST","put","delete"],
      credentials: true,
    })
  );
  // Get the __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
  app.use(express.static(path.join(__dirname, '../Frontend/dist')));
// Fallback for SPA (Single Page Application)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../Frontend/dist/index.html'));
});
// app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/reservation", reservationRouter);

  app.use(errorMiddleware);
  
  export default app;
  dbConnection();