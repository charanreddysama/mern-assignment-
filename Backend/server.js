import {userApp} from "./apis/userapis.js"
import {productApp} from "./apis/productapis.js"

//create http server
      // import express module
      
import exp from 'express'
//create Server
const app =exp()
//Assign port number
app.listen(3000,()=>console.log('HTTP server listening on port 3000 ..'))

//body parsing middleeware
app.use(exp.json())

app.use('/user-api',userApp)
app.use('/product-api',productApp)
