// MODULE 4: ROLE & PERMISSION ENGINE
//   -> Get all role names
import { users,courses,cart,roles } from "./data.js";
let rolenames=Object.keys(roles);
console.log("All Role names:",rolenames)
//   -> Check if student can delete
let canStudentDelete=roles.student.find((e)=>e==='delete')?true:false;
console.log("Can student delete?",canStudentDelete);
//   -> Create a flat list of all unique permissions
let allpermissions=roles.admin
console.log("All unique permissions:",allpermissions)
//   -> Add new role moderator immutably
let newRoles=roles
newRoles.moderator=["update","view"]
console.log(newRoles)