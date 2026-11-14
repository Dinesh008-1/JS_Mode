const employee = {
    id: 101,
    name: "Priya",
    age: 25,
    department: "Engineering"
};

let jsonemp = JSON.stringify(employee);
console.log(jsonemp);
console.log(typeof jsonemp);

let jsvalue = JSON.parse(jsonemp);
console.log(`name: ${jsvalue.name}`);

console.log(JSON.stringify(jsonemp,null,4));


const sampleObject = {
    // 1. A name
    name: "Priya",
    
    // 2. An undefined property
    customUndefined: undefined,
    
    // 3. A Date object
    createdAt: new Date(),
    
    // 4. An array containing undefined
    tags: ["active", undefined, "verified"],
    
    // 5. A method
    greet() {
        return "Hello, world!";
    },
    
    // 6. A numeric property containing NaN
    score: NaN
};

let jsonsamobj = JSON.stringify(sampleObject);
console.log(jsonsamobj);

let samObject = JSON.parse(jsonsamobj);
//type of date
console.log(typeof samObject.createdAt);