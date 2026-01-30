const marks = [78, 92, 35, 88, 40, 67];
//   1. filter() marks ≥ 40 (pass marks)
//     2. map() to add 5 grace marks to each student
//     3. reduce() to find highest mark
//     4. find() first mark below 40
//     5. findIndex() of mark 92
let result1=marks.filter(mark=>mark>=40)
console.log("pass marks",result1)
let result2=marks.map(mark=>mark+5)
console.log("marks after adding grace marks",result2)
let result3=marks.reduce((accumulator,element)=>
Math.max(accumulator,element))
console.log("highest mark",result3)
let result4=marks.find(mark=>mark<40)
console.log("first mark below 40",result4)
let result5=marks.findIndex(mark=>mark===92)
console.log("Index of mark 92",result5)
