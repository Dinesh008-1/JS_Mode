const fullname = "    dinesh kumar     ";
let changedfullname = fullname.trim().toUpperCase();
const N = fullname.length;

if(changedfullname.includes("KUMAR")){
    console.log("Yes it contains kumar");
}
console.log(`Slice item ${changedfullname.slice(0,6)}`);
let array = changedfullname.split(" ");
