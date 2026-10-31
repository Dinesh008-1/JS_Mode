// 1. NUMBER - Stores integers and decimal values
let age = 21;
let price = 99.50;

// 2. STRING - Stores text
let name = "Dinesh";

// 3. BOOLEAN - Stores true or false
let isStudent = true;

// 4. UNDEFINED - Variable declared but no value assigned
let city;
console.log(city); // undefined

// 5. NULL - Represents an intentional empty value
let salary = null;

// 6. BIGINT - Stores very large integer values
let bigNumber = 12345678901234567890n;

// 7. SYMBOL - Creates a unique identifier
let id = Symbol("id");

// 8. OBJECT - Stores data in key-value pairs
let student = {
    name: "Dinesh",
    age: 21,
    department: "CSE"
};

// ARRAY - Stores multiple values (a special type of object)
let fruits = ["Apple", "Mango", "Orange"];

// FUNCTION - Stores reusable blocks of code (also a special type of object)
function greet() {
    console.log("Hello JavaScript");
}

// Checking data types using typeof
console.log(typeof age);       // number
console.log(typeof name);      // string
console.log(typeof isStudent); // boolean
console.log(typeof city);      // undefined
console.log(typeof salary);    // object (JavaScript quirk)
console.log(typeof bigNumber); // bigint
console.log(typeof id);        // symbol
console.log(typeof student);   // object
console.log(typeof fruits);    // object
console.log(typeof greet);     // function


//Symbol

let secret = Symbol("secret_id");

const user = {
    fname: "Dinesh",
    dept: "CSE",
    [secret]: 1060
};

for(let key in user){
    console.log(`${key} : ${user[key]}`);
}

/*
O/P
//secret not visible in loop, helps to not overwirtten accidently or seen in normal loop
fname : Dinesh
dept : CSE

*/