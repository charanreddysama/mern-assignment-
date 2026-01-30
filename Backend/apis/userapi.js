import exp from 'express'
// cereate a mini-express app
export const userApp=exp.Router()
  
  
  
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


    //get all users data
    userApp.get('/users',middleware1,(req,res)=>{
        //send users data in response
        res.status(200).json({message:"all users",payload:users})
    })

    // post req handling route
    userApp.post('/users',middleware2,(req,res)=>{
       //get user resourse from req
       let newUser=req.body
      // console.log("new user:",newUser)

        users.push(newUser)
        res.status(201).json({message:"user created"})
    })

    // put req handling route
    userApp.put('/users',(req,res)=>{
        //get modified user from client
        let modifiedUser=req.body
            // console.log(modifiedUser)

        // find the user with id exist in arr
        let userIndex=users.findIndex((e)=>e.id===modifiedUser.id)
            //    console.log(modifiedUser)

        //if user not foud send res ass user not found
        if(userIndex===-1) res.status(404).json({message:"user not found"})
        ///if found modifiy the use send res of modifies
        else{
            let deletedUser=users.splice(userIndex,1,modifiedUser)
            res.status(200).json({message:"user modified"})
        }

    })

    //read user by id
    userApp.get('/users/:id',(req,res)=>{
        console.log(req.params)
        //read id form params
        let userId=Number(req.params.id)
        //read user by id
        let user=users.find((e)=>e.id===userId)
        if(!user) return res.status(404).json({message:"user not found"})
        res.status(200).json({message:"user found",payload:user})
    })


    // delete req handling route
    userApp.delete('/users/:id',(req,res)=>{
        let userId=Number(req.params.id)
        let userIndex=users.findIndex((e)=>e.id===userId)
        if(userIndex===-1) return res.status(404).json({message:"user not found"})
        else{
            let deletedUser=users.splice(userIndex,1)
            res.status(200).json({message:"user deleted sucessfully",payload:deletedUser})
        }
        
    })