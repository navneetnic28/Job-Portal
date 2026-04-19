import express from 'express';
import cookieParser from 'cookie-parser';
import cors from "cors";
import dotenv from "dotenv";
import connectDB from './utils/db.js';
dotenv.config({});
const app=express();


app.get("/",(req,res)=> {
    return res.status(200).json({
        message:"welcome to the api",
        timestamp:new Date().toISOString(),
        success:true
    });
});



app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

const corsOptions ={
    origin:["http://localhost:5121"],
    Credentials:true,
};
app.use(cors(corsOptions));

const PORT =process.env.PORT  || 8801
app.listen(PORT,() => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});