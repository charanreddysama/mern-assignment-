import express from 'express';
import { userApp } from './APIs/userAPI.js';
import {productApp} from './APIs/productAPI.js' 
import {connect} from 'mongoose';
import cookieParser from "cookie-parser";
//create app
const app=express();
const port=4000;

// connect to db server
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/anuragdb');
        console.log("Db connection is success");
        // Assign port
        app.listen(port, () => console.log('server listening on port 4000....'));
    } catch (err) {
        console.log("Err in db connection:", err);
    }
}

// start DB connection and server
connectDB();

// body parser middleware
app.use(express.json())
app.use(cookieParser())


//route to mini-app route
app.use('/user-api', userApp)
app.use('/product-api',productApp)

//error handler middle ware
//without this it show HTML code but now handled and shown as json.

app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",payload:err.message})
})