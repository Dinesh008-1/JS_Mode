// 1. The Product constructor function
function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.getDetail = function(){
    console.log(
`name: ${this.name}
price:${this.price}
`);
}

const pro1 =new Product("Arun",40000);
const pro2 =new Product("Zack",30000);
pro1.getDetail()
pro2.getDetail()

console.log(`getDetail is own property of product: ${Object.hasOwn("pro1","getDetail")}`);
console.log(`first product is an instance of Product: ${pro1 instanceof Product}`);