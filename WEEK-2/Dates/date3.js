// let dob = "2000-05-15";
//Calculate exact age in years
let dob="2000-05-15";
let datedob=new Date(dob);
let date=new Date();
let age=date.getFullYear()-datedob.getFullYear();
console.log("Age is: "+age);
