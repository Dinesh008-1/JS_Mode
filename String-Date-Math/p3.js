const studentName = "Dinesh";
const birthDate = new Date(2000, 5, 15);
const currentDate = new Date();

let age = currentDate.getFullYear() - birthDate.getFullYear();
let monthEqual = currentDate.getMonth() === birthDate.getMonth();
if(monthEqual){
    age--;
}
console.log(`Age of ${studentName} is ${age}`);
console.log(`Birthmonth of ${studentName} is ${birthDate.getMonth()+1}`);
if(age>=18){
    console.log(`Age of ${studentName} is 18 or above`);
}else{
    console.log(`Age of ${studentName} less than 18`);
   
}
if(age>=18){
    console.log(`${studentName} is eligible to apply`);
}else{
    console.log(`${studentName} is not eligible to apply`);
}

