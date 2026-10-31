//Hoisting in var

console.log(a); //undefined
var a = 10;

/*
conceptually
var a;
console.log(a);
a=10;
*/

//Hoisting in let/const

// console.log(b);//Reference Error
// console.log(c);//Reference Error
// let b = 55;
// const c = 759;

// Area upto line 16 is TDZ - Temporary Dead Zone

//hoisting in function-initialized at top of the code
greet();
function greet(){
    console.log("Hello")
}

//let is necessary for loops - since var is function scope and hoisted which creates one binding across the loop & iteration, By the time the setTimeout callbacks run 1 second later, the loop has already finished executing, and e has reached 5. As a result, it prints 5 five times:
for(var e = 0;e<5;e++){
    setTimeout(() => {
    console.log(`Output: ${e}`);
  },1000)  
}
//let is block-scoped, JavaScript creates a new binding (a fresh variable) for each individual iteration of the loop.
for(let f = 0;f<5;f++){
    setTimeout(() => {
    console.log(`Output: ${f}`);
  },1000)  
}