import exp from 'express';
import bcrypt from 'bcrypt';
import { userModel } from '../models/userModel.js';
import { productModel } from '../models/productModel.js';
export const userRoute = exp.Router();

//test route
userRoute.get('/users',async(req,res)=>{
    let users=await userModel.find()

    res.json({message:"users",
        payload:users
    })
})

// create  user
userRoute.post('/users', async (req, res) => {
    try {
        const newUser = req.body
        // hash the password and replace plain password with hashed password
        newUser.password = await bcrypt.hash(newUser.password, 10); 
        
        // create new user document
        const userDocument = await userModel.create(newUser);
        res.status(201).json({message:"User created", payload:userDocument })

    }catch(err){
        res.status(500).json({message:"Error in creating user"})
    }
})


// update user by id
userRoute.put('/users/:id', async (req, res) => {
    try {
        const updates = req.body

        if (updates.password) {
            updates.password = await bcrypt.hash(updates.password, 10);
        }

        const updatedUser = await userModel.findByIdAndUpdate(req.params.id, updates, { new: true });
        if (!updatedUser) return res.status(404).json({ message: 'user not found' });
        res.status(200).json({ message: 'user updated', payload: updatedUser });

    } catch (err) {
        console.error(err);
        res.status(400).json({ message: 'error updating user' });
    }
})


//user cart
userRoute.put("/users/:uid/cart/:pid",async(req,res)=>{
    //read uid and pid from url parameters
    let {uid,pid}=req.params;  //{uid:" ",pid:" "}
    //check user
    let user=await userModel.findById(uid)
    if(!user){
        return res.status(404).json({message:"user not found"})
    }
    //check product
    let product =await productModel.findById(pid)
    if(!product){
        return res.status(401).json({message:"product not found"})
    }

    //check if product exits in cart ,if it exists increase the quantity 
    const item = user.cart.find(e => e.product.toString() === pid)

    if(item) item.quantity += 1 
    else{
        user.cart.push({
            product:pid,
            quantity:1
        })
    }
    await user.save()
    //response
    res.json({ message:"Cart updated", payload:user})
})

// read user by id
userRoute.get("/users/:uid",async(req,res)=>{
    let {uid}=req.params;
    //find user
    let userObj =await userModel.findById(uid).populate("cart.product","productName price")
    if(!userObj) return res.status(404).json({message:"user not found"})

    //response
    res.status(200).json({message:" user",payload:userObj})
})
