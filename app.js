import express from "express";
import mongoose from "mongoose";
import router from "./routes/User-routes.js";
import brouter from "./routes/Blog-routes.js";
import dotenv from "dotenv";

dotenv.config();
const app=express(); 
app.use(express.json())
app.use("/api/user",router)
app.use("/api/blog",brouter)

mongoose.connect(process.env.MONGO_URI).then(()=>{app.listen(6000);
}).then(()=>console.log("Connected and listening at 6000")).catch((err)=>console.log(err));

