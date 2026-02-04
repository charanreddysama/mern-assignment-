import exp from 'express'
import {connect} from 'mongoose'
import { userRoute } from './APIs/userApi.js'
import {productRoute} from './APIs/productApi.js'

//create http server 
const app = exp();
const port = 4000;

// connect server to Mongodb database
async function connectDB() {
    try {
        await connect('mongodb://localhost:27017/ecomdb');
        console.log("Db connection is success");
        // Assign port
        app.listen(port, () => console.log('server listening on port 4000....'));
    } catch (err) {
        console.log("Err in db connection:", err);
    }
}
connectDB() //function calling

//use body parser middleware
app.use(exp.json())

// api  routes
app.use('/users-api', userRoute)
app.use('/products-api', productRoute)

//error handler middlewre
app.use((err, req, res, next) => {
    console.error(err)
    res.status(500).json({ message: 'Error', reason: err.message})
})
