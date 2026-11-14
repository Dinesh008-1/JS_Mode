const person = {
    country:"India"
};
const student = {
    name:"Arun"
};
Object.setPrototypeOf(student,person);

console.log(
`name: ${student.name},
country: ${student.country},
country is own property of student: ${Object.hasOwn(student,"country")},
country is prototype of student: ${"country" in student}`
);