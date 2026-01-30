const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];
//filter() employees from IT department
let itEmployees = employees.filter(employee => employee.department === "IT");
console.log("IT Employees:", itEmployees);
//map() to add: netSalary = salary + 10% bonus
let employeesWithNetSalary = employees.map(employee => {
  let netSalary = employee.salary + (employee.salary * 0.10);
  return { ...employee, netSalary: netSalary };
});
console.log("Employees with Net Salary:", employeesWithNetSalary);
//reduce() to calculate total salary payout
let totalSalaryPayout = employees.reduce((acc, employee) => acc + employee.salary, 0);
console.log("Total Salary Payout:", totalSalaryPayout); 
//find() employee with salary 30000
let specificEmployee = employees.find(employee => employee.salary === 30000);
console.log("Employee with Salary 30000:", specificEmployee);
//findIndex() of employee "Neha"
let nehaIndex = employees.findIndex(employee => employee.name === "Neha");
console.log("Index of Neha:", nehaIndex);