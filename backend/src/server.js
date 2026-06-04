
import dotenv from "dotenv"
import rateLimit from "./middleware/rateLimiter.js";
import cors from "cors";

import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDb } from "./config/db.js";

dotenv.config();
//console.log(process.env.mongo_uri);
const PORT = process.env.PORT || 5001
const app = express();

//middleware

app.use(cors({origin: "http://localhost:5173"}));
app.use(express.json());
app.use(rateLimit);

app.use("/api/notes",notesRoutes);

//ONCE DATABASE CONNECTED ONLY THEN LISTEN
connectDb().then(()=> {
    app.listen(5001, ()=>{
    console.log("Server started on PORT 5001")
})
});

