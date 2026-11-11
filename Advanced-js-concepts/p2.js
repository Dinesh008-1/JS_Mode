//callback function
const employees = [
    { name: "Dinesh", salary: 50000 },
    { name: "John", salary: 30000 },
    { name: "David", salary: 60000 },
    { name: "Sam", salary: 25000 },
    { name: "Alex", salary: 45000 }
];

let empAtleast40k = employees.filter((emp) => emp.salary >= 40000);

let empName = employees.map((emp) => emp.name);

employees.forEach((emp) =>{
    console.log(`${emp.name} - ${emp.salary}`);
});

let empBelow40k = employees.filter((emp) => emp.salary<40000);

console.log(empAtleast40k);
console.log(empName);
console.log(empBelow40k);
