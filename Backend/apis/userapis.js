
import exp from 'express'
export const userApp=exp.Router()
//create Server

let users=[]

       //create  a custom middleware
    function middleware1(req,res,next){
        console.log("middleware 1 executed")
        //send req
        //res.json({message:"res from middleware1"})
        //forward to next middleware
        next()
    }
    function middleware2(req,res,next){
        console.log("middleware 2 executed")
        //send req
        //res.json({message:"res from middleware2"})
        //forward to next middleware
        next()
    }

    // userApp.use(middleware1)
    // userApp.use(middleware2)

    
//Get all user data
     userApp.get('/users',(req, res)=>{
      //send users data in res
      res.status(200).json({message:"ALL users",payload:users})
     })

//post req handling route     
     userApp.post('/users',(req, res)=>{
      //get user resource from req
      let newUsers=req.body
      //console.log("new User",newUser)
      users.push(newUsers)
      //send req
      res.status(201).json({message:"new  user data ",payload:users})
    })
     
//put req handling route
      userApp.put('/users',(req, res)=>{
      //get modified user from request
         let modifiedUser=req.body
      // console.log(modifiedfindUser)

      //find the user exists in array
         
      let userIndex=users.findIndex(a=>a.id===modifiedUser.id)
      //if user not found ,send res as "user not found"
         if(userIndex===-1){
           return  res.status(404).json({message:"user not found",payload:users})
         }
         else{
      //if user found,then modify the user
           let deleteduser=users.splice(userIndex,1,modifiedUser)
      //send res as "user modified"
            res.status(200).json({message:"user modified",payload:users})
         }
         })

      //read user by id
         userApp.get('/users/:id',(req,res)=>{
            
            console.log(req.params)
      //reaad id from url parameter
         let userId =Number(req.params.id)
      //read user by this id
         let user=users.find(userObj=>userObj.id===userId)
         if(!user){
            return res.status(404).json({message:"user not found"})
         }
      //send req
         res.status(200).json({message:"user",payload:user})

         })

// delete req handling route  
        userApp.delete('/users/:id',(req, res)=>{
      //console.log(req,params)
         let userId=Number(req.params.id)
         let userIndex=users.findIndex(userObj=>userObj.id===userId)
         if(userIndex===-1){
            return res.status(404).json({message:"no user to delete"})
         }
         else{
            let deleteduser=users.splice(userIndex,1)
             res.status(200).json({message:"user deleted",payload:deleteduser})

         }
      })