import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { connectDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

dotenv.config();

const app = express();


// middleware
app.use(cors({
  origin: "http://localhost:5173" // only allow React frontend
}));
app.use(express.json()); // this middlware will parse JSON bodies: req.body
app.use(rateLimiter);

const Port = process.env.PORT || 5001;

app.use("/api/notes", notesRoutes);

connectDB().then(()=>{
    
    app.listen(Port, () =>  console.log(`Server started on port: ${Port}`));
});



