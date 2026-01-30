// MODULE-1 :USER PROCESSING ENGINE
import { users,courses,cart,roles } from "./data.js";
//   -> Get only active users
let activeusers=users.filter((a)=>a.active)
console.log(activeusers)
//   -> Extract names of active users
console.log("names:",activeusers.map((a)=>a.name))
//   -> Check if any admin exists
console.log("checking Admins:",activeusers.find((a)=>a.role==='admin'))
//   -> Find user by id
let id=3;
console.log(users.find((a)=>a.id===id))
//   -> Deactivate a user immutably
let newUsers=users.map((e)=>{
    return{
        ...e,
        active:false
    }
})
console.log("Deactivated the users:",newUsers)