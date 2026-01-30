const courses = ["javascript", "react", "node", "mongodb", "express"];
// 1. filter() courses with name length > 5
//     2. map() to convert course names to uppercase
//     3. reduce() to generate a single string:
//               "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

//     4. find() the course "react"
//     5. findIndex() of "node"
let result1=courses.filter(courses=>courses.length>5)
console.log("courses name with length >5",result1)
let result2=courses.map(courses=>courses.toUpperCase()) 
console.log("name in uppercase",result2)
let result3=courses.reduce((accumulator,element)=>accumulator+" | "+element)
console.log(result3)
let result4=courses.find(courses=>courses==="react")
console.log(result4)
let result5=courses.findIndex(courses=>courses==="node")
console.log(result5)