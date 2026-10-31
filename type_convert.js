//Type Conversion - Explicit

let a = String(100);
console.log(typeof a); // string


//Type Coersion - Automatically

let b = "5"+2;  // due to concatenation operator +
console.log(typeof b); // string

let c = "5"-2; // all other operators -,*,/,% converts string to  numbers
console.log(typeof c); //  number


//special function

console.log(Number("")); // 0
console.log(Number(" ")); // 0