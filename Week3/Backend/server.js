import { userApp } from './apis/userapi.js'
import { productApp } from './apis/productapi.js'

// create HTTP server
    // import express modeule
    import exp from 'express'
    //create serve
    const app=exp()
    //assign port number
    app.listen(3000,()=>console.log('HTTP server listining on port 3000....'))

    // body parsing middleware
    app.use(exp.json())

    app.use('/user-api',userApp)
    app.use('/product-api',productApp)
   