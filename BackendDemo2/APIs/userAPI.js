// creating a seperate route

import exp from 'express'
import { UserModel } from '../models/UserModel.js'
export const userApp = exp.Router()
//user api roures

//create user
userApp.post('/users',async(req,res)=>{
    //get newuser from req
    let newUser=req.body;
    //create new user document
    let newUserDoc=new UserModel(newUser)
    //save in db
    await newUserDoc.save()
    //send response
    res.status(201).send({message: "New user created", payload: newUser})
})

//read user
userApp.get('/users', async (req, res) => {
    //read users from Db
    let users=await UserModel.find()
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