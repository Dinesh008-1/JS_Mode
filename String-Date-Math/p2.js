const price = 1299.99;
const quantity = 3;
const discount = 10;

let totalPrice = price * quantity;
let discountPrice = totalPrice - (totalPrice*0.10);

console.log(`Discounted Price ${discountPrice.toFixed(2)}`);
if(Number.isInteger(quantity)){
    console.log("Quantity is integer");
}
let randomNum = Math.floor(Math.random() * 100);
console.log(randomNum);