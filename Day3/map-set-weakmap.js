const skills = [
    "Java",
    "React",
    "Java",
    "Spring Boot",
    "React",
    "JavaScript",
    "Python"
];

let uniqSkills = new Set(skills);
console.log(uniqSkills);

console.log(`Set has React ${uniqSkills.has("React")}`);
uniqSkills.add("TypeScript");
uniqSkills.delete("Python");

let uniqArray = [...uniqSkills];
console.log(uniqArray);

//Add five employees

const employees = new Map(
    [[101,{ id: 101, name: "Priya", salary: 50000, department: "IT" }],
    [102,{ id: 102, name: "Rahul", salary: 55000, department: "IT" }],
    [103,{ id: 103, name: "Ananya", salary: 65000, department: "Finance" }],
    [104,{ id: 104, name: "Vikram", salary: 70000, department: "Engineering" }],
    [105,{ id: 105, name: "Neha", salary: 48000, department: "Marketing" }]]
);
//Retrieve employee 103
console.log(`Employee 103: ${employees.get(103)}`);
//Update employee 102's salary
employees.get(102).salary = 676767;
//Check whether employee 105 exists
console.log(`Employee 105: ${employees.has(105)}`);
//Print all employee IDs
console.log(`Employee ids: ${employees.keys()}`);
//Print all employee names

let employeeName = [[...employees.values()].map(emp => emp.name)];
console.log(`uniqueEmployeeName: ${employeeName}`);

//Calculate the total salary

let totalSalary = [...employees.values()].reduce((sum,employee)=>{
    return sum + employee.salary;;
},0);

console.log(`Total Salary:${totalSalary}`);

//Count the unique departments using Set

let uniqDepart = new Set([...employees.values()].map(emp => emp.department));
console.log(`uniqueDepart size: ${uniqDepart.size}`);

