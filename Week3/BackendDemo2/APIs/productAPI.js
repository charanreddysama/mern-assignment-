import exp from 'express'
import { productModel } from '../models/productModel.js'

export const productApp=exp.Router()
// get all products
productApp.get('/products',async (req,res)=>{
    // get all products 
    let products=await productModel.find()

    res.status(200).json({message:"all products",payload:products})
})

productApp.get('/products/:id',async (req,res)=>{
    // get obj id
    let productObjId=req.params.id
    // finding product
    let product=await productModel.findById(productObjId)
    //send res
    res.status(200).json({message:"product found",payload:product})

})

productApp.post('/products',async (req,res)=>{
    // get new data
    let product=req.body
    //create a new prouct doc
    let newProductDoc=new productModel(product)
    // saving new doc
    await newProductDoc.save()
    //send res
    res.status(200).json({message:"new product added",payload:newProductDoc})

})

//put using pid
productApp.put('/products/:pid',async (req,res)=>{
    //get obj id
    let producObjId=req.params.pid
    // get passed data
    let modifiedProduct=req.body
    // update and return modified product
    let latestProduct=await productModel.findByIdAndUpdate(producObjId,
        {$set:{...modifiedProduct}},
        {new:true,runValidators:true}
    )
    //send res
    res.status(200).json({message:"product updated",payload:latestProduct})

})

//delete
productApp.delete('/products/:pid',async(req,res)=>{
    //get objectid from url param
        let productobjID=req.params.pid;
        //delete product from db
        let deletedproduct=await productModel.findByIdAndDelete(productobjID)
        //send response
        res.status(200).json({message:"user deleted",payload:deletedproduct})

})