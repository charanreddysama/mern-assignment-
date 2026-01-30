// MODULE 3: SHOPPING CART ENGINE 
//   -> Merge cart with courses to get full course info
import { users,courses,cart,roles } from "./data.js";
let newcart=cart.map((cartitem)=>{
    let courseinfo=courses.find((course)=>course.id===cartitem.courseId)
    return {
        ...cartitem,
        ...courseinfo
    }
})
console.log("Merged cart with course info:",newcart)
//   -> Calculate total cart amount
let totalcartamt=newcart.reduce((acc,ele)=>{
    return acc+=ele.price*ele.qty
},0)
console.log("Total cart amount:",totalcartamt)
//   -> Increase quantity of a course (immutably)
let courseIdToIncrease=103;
let updatedcart=newcart.map((cartitem)=>{
    if(cartitem.courseId===courseIdToIncrease){ 
        return {
            ...cartitem,
            qty:cartitem.qty+1
        }
    }
})
//   -> Remove a course from cart
let courseremoveid=101;
let cartafterremoval=newcart.filter((cartitem)=>cartitem.courseId!==courseremoveid)
console.log("Cart after removal:",cartafterremoval)
//   -> Check if all cart items are paid courses
let allpaidcourses=newcart.every((cartitem)=>cartitem.price>0)
console.log("Are all cart items paid courses?",allpaidcourses)