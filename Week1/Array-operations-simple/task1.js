const temperatures = [32, 35, 28, 40, 38, 30, 42];


    // 1. filter() temperatures above 35
    // 2. map() to convert all temperatures from Celsius → Fahrenheit
    // 3. reduce() to calculate average temperature
    // 4. find() first temperature above 40
    // 5. findIndex() of temperature 28
let result1=temperatures.filter(temperature=>temperature>35)
console.log("temperatures above 35",result1)
let result2=temperatures.map(temperature=> (temperature * 9/5) + 32);  
console.log("temperatures in Fahrenheit",result2)   
let result3=temperatures.reduce((accumulator,element)=>accumulator+element,0)/temperatures.length
console.log("average temperature",result3)
let result4=temperatures.find(temperature=>temperature>40)
console.log("first temperature above 40",result4)
let result5=temperatures.findIndex(temperature=>temperature===28)
console.log("Index of temperature 28",result5)