//destructing
const student = {
    name: "Rahul",
    age: 22,
    course: "Java Full Stack"
};

// let {name,age,course} = student;
// console.log(`name: ${name}, age: ${age},course: ${course}`);
let {name: studentName,age,course, city = "Unknown"} = student;
console.log(`name: ${studentName}, age: ${age},course: ${course}, city: ${city}`);
