//destruntoring
const employees = [
    {
        id: 101,
        name: "Arun",
        salary: 40000,
        address: { city: "Chennai" }
    },
    {
        id: 102,
        name: "Priya",
        salary: 60000,
        address: { city: "Bangalore" }
    },
    {
        id: 103,
        name: "Rahul",
        salary: 50000,
        address: { city: "Hyderabad" }
    }
];
let i=1;
for(let {name,salary,address:{city}} of employees){
    console.log(`employee ${i++}`);
    console.log(
    `name: ${name}
    salary: ${salary}
    city: ${city}`);
}
let totalSum=employees.reduce((acc,{salary}) => acc+salary
,0);
console.log(`Total Sum ${totalSum}`);