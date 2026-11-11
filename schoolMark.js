const username = "Dinesh";
let m1 = 91;
let m2 = 57;
let m3 = 75;
let m4 = 84;
let m5 = 40;
let m6 = 0;
let mark = m6;
if((mark<0) || (mark>100) || (typeof mark) != "number"){
    console.log("Invalid Mark");
}
else if(mark>=90){
    console.log(`${username}'s grade is A`);
}else if(mark>=75){
    console.log(`${username}'s grade is B`);
    
}else if(mark>=50){
    console.log(`${username}'s grade is C`);
}else{
    console.log(`Your Fail`);
}