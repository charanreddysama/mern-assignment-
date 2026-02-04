// creating a seperate route

import exp from 'express'
import { UserModel } from '../models/UserModel.js'
import {hash,compare} from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { verifyToken } from '../middlewares/verifyToken.js'
export const userApp = exp.Router()
//User Api routes

//create user
userApp.post('/users',async(req,res)=>{
    //get newuser from req
    let newUser=req.body;
//hash the password
let hashedPassword=await hash(newUser.password,12)
//repalce the plain pass with hashed password
newUser.password=hashedPassword
    //create new user document
    let newUserDoc=new UserModel(newUser)
    //save in db
    await newUserDoc.save()
    //send response
    res.status(201).send({message: "New user created", payload: newUser})
})

userApp.post('/auth',async (req,res)=>{
  try{
    // get user cred obj
    let userCred=req.body;
    let userOfDB=await UserModel.findOne({username:userCred.username})
    if(userOfDB===null){
      return res.status(404).json({message:"invalid Username"})
    }
    
    // Compare the plain text password with the hashed password stored in DB
    let status=await compare(String(userCred.password), userOfDB.password)
    if (status===false){
      return res.status(401).json({message:"invalid Password"})
    }
// create signed token 
    let signedToken=jwt.sign(
      {username:userCred.username},
      'abcdef',
      {expiresIn:"1h"}
    )
    //save token as httpOnly cookie
    res.cookie('token',signedToken,{
        httpOnly:true, //it is httponly cookie
        secure:false,
        sameSite:'lax'
    })
    //send token in res
    res.status(200).json({message:"Login success"})
    res.status(200).json({message:"login success ",token:signedToken})
  }catch(err){
    res.status(400).json({message:"Authentication error",error:err.message})
  }
})

//read user
userApp.get('/users', async (req, res) => {
    //read users from Db
    let users=await UserModel.find({},{username:1,_id:0,age:1})//projection
    res.send({message:"users data",payload:users})
})


//read user by object id
userApp.get('/users/:id', async (req, res) => {
    //get objectid from url param 
    let objID=req.params.id;
    //find user in db
    let userObj=await UserModel.findById(objID)
    //send res
    res.status(200).json({message:"user data",payload:userObj})
})


//update user
userApp.put('/users/:id', async (req, res) => {
    //get objectid from url param
    let objID=req.params.id;
    //get modified user from req
    let modifiedUser=req.body;
    //make update 
   let latestUser =await UserModel.findByIdAndUpdate(objID,
        {$set:{...modifiedUser}},
        {new:true})
        //send response
        res.status(200).send({message:"user modified",payload:modifiedUser})
   });
//delete user
userApp.delete('/users/:id', async (req, res) => {
    //get objectid from url param
    let objID=req.params.id;
    //delete user from db
    let deletedUser=await UserModel.findByIdAndDelete(objID)
    //send response
    res.status(200).json({message:"user deleted",payload:deletedUser})
})


//test route 
userApp.get("/test",verifyToken,(req,res)=>{
res.status(200).json({message:"test route"})
})