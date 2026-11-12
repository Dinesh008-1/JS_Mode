const employee = {
    id: 101,
    name: "Priya",
    salary: 50000,
    department: "IT",
    city: "Chennai"
};
const updatedEmployee = {
    ...employee,
    salary: 60000,
    city: "Bangalore",
    email:"priya@emails.com"
};

const {name, ...otherDetails} = updatedEmployee;
console.log(employee);
console.log(updatedEmployee);
console.log(name);
console.log(otherDetails);