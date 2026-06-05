
import dotenv from "dotenv"
import rateLimit from "./middleware/rateLimiter.js";
import cors from "cors";
import path from "path";

import express from "express"
import notesRoutes from "./routes/notesRoutes.js"
import { connectDb } from "./config/db.js";

dotenv.config();
console.log("NODE_ENV:", process.env.NODE_ENV);
//console.log(process.env.mongo_uri);
const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();


//middleware
/*console.log("NODE_ENV =", process.env.NODE_ENV);*/
 
console.log("dirname:", __dirname);
console.log("dist path:", path.join(__dirname, "../frontend/dist"));

if(process.env.NODE_ENV !== "production"){
app.use(cors({origin: "http://localhost:5173",}));
}
app.use(express.json());
app.use(rateLimit);

app.use("/api/notes",notesRoutes);
/*app.get("/", (req, res) => {
  res.send("Backend is running");
});
*/


/*if(process.env.NODE_ENV ==="production"){
    app.use(express.static(path.join(__dirname,"../frontend/dist")));

    app.get("/*",(req,res)=>{
res.sendFile(path.join(__dirname,"../frontend","dist","index.html"))
});
}
*/
/*console.log(path.join(__dirname, "../frontend/dist"));
*/

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.use((req, res) => {
    res.sendFile(
      path.join(__dirname, "../frontend", "dist", "index.html")
    );
  });
}
/*
 
}
*/

//ONCE DATABASE CONNECTED ONLY THEN LISTEN
connectDb().then(()=> {
    app.listen(5001, ()=>{
    console.log("Server started on PORT 5001")
})
});

