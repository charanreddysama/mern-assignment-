import exp from 'express';
import { userApp } from './APIs/userapi.js';
import {productApp} from './APIs/productAPI.js' 
import {connect} from 'mongoose';

//create app
const app=exp();
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
app.use(exp.json())


//route to mini-app route
app.use('/user-api', userApp)
app.use('/product-api',productApp)

//error handler middle ware
//without this it show HTML code but now handled and shown as json.

app.use((err,req,res,next)=>{
    res.status(500).json({message:"error",payload:err.message})
})