// MODULE 2: COURSE CATALOG ENGINE
//   -> Get published courses
import { users,courses,cart,roles } from "./data.js";
let publishedcourses = courses.filter((a)=>a.published)
console.log("published Courses:",publishedcourses)
  //-> Sort courses by price (high → low)
const sortedCourses=[...courses]//creating a copy of the courses data
for(let i=0;i<sortedCourses.length;i++){
    for(let j=i+1;j<sortedCourses.length;j++){
        if(sortedCourses[i].price<sortedCourses[j].price)
            [sortedCourses[i],sortedCourses[j]]=[sortedCourses[j],sortedCourses[i]]//swapping
    }
}
console.log(sortedCourses)
//   -> Extract { title, price } only

let extracteddata=courses.map((a)=>{
    return {
        'title':a.title,
        'price':a.price
    }
})
console.log("extracted data:",extracteddata)
//   -> Calculate total value of published courses
let totalValue=courses.reduce((acc,ele)=>{
    return acc+=ele.price
},0)
console.log("totalvalue:",totalValue)
//   -> Add a new course immutably
let newCourses=[...courses]
newCourses.push({
    id:104,
    title:'LLMs',
    price:2500,
    published:true
})
console.log(newCourses)