const employee1 = {
    name: "Arun",
    city: "Chennai",
    salary: 55000
};

const employee2 = {
    name: "Priya",
    city: "Bangalore",
    salary: 60089
};

function introduce(age){
    console.log(`I'm ${this.name} from ${this.city} and ${age} years old` );
}

introduce.call(employee1,18);
introduce.call(employee2,44);
introduce.apply(employee1,[50]);
introduce.apply(employee2,[34]);

function calculateSalary(bonus, deductions) {
    return this.salary + bonus - deductions;
}

console.log(calculateSalary.call(employee1,10000,2000));
console.log(calculateSalary.apply(employee2,[12000,3000]));

const bindFunc = calculateSalary.bind(employee1);

console.log(bindFunc(16000,1000));