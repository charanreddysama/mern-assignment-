let enrollmentDeadline = new Date("2026-01-20");

const message = enrollmentDeadline > new Date() 
? "Enrollment is open" : "Enrollment is closed";
console.log(message);

let userdate = new Date("2026-02-30");
//Detect whether the date is valid or invalid

const validateDate =isNaN(userdate.getTime()) 
? "The date is invalid." : "The date is valid.";
console.log(validateDate);