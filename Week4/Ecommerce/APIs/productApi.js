import exp from 'express'
import { productModel } from '../models/productModel.js'
export const productRoute = exp.Router()

// create product
productRoute.post('/products',async(req,res)=>{
    let productObj=req.body
    let productDocument=new productModel(productObj)

    await productDocument.save()

    res.status(200).json({message:"Product Added Sucessfully",payload:productDocument})
})

// Get  products
productRoute.get('/products',async(req,res)=>{
    let products=await productModel.find()

    res.status(200).json({message:"All products",payload:products})
})
