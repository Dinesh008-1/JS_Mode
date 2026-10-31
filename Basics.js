//Global Scope
let a = 10;
var b = 20;
const c = 499;

{
    //block scope
    let a = 20;
    console.log(`a=${a}`);
    //var is not block scope it is function scope
    var b = 25;
}

function add(a,b){
    //function scope var, let
    var c = a+b;
    let d = a+b+10;
    console.log(`c(a+b)=${c}, d(a+b+10)=${d}`);
}

console.log(`a=${a}`);
console.log(`b=${b}`);
add(a,b);