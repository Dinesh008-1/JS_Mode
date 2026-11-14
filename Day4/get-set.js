class Person{
    constructor(name,age){
        this.name = name;
        this._age = age;
    }
    get age(){
        return this._age;
    }
    set age(age_var){
        if(age_var>120){
            console.log("Invalid age");
            return;
        }
        this._age = age_var;
    }

}

const p1 = new Person("Kumar",35);

p1.age = 84;
console.log(p1.age);
p1.age = 150;
console.log(p1.age);

// O/P
// 84
// Invalid age
// 84



class Product{
    constructor(name,price){
        this.name = name;
        this._price = price;
    }
    get price(){
        return (this._price);
    }
    get discountedPrice(){
        return (this.price -(this.price * 0.1));
    }
    set price(amt){
        if(amt<0){
            console.log("Invalid price");
            return;
        }
        this._price = amt; 
    }
}

const pro1 = new Product("Phone12",26000);
console.log(pro1.price);

console.log(`Discounted Price ${pro1.discountedPrice}`);

pro1.price = -1455;
pro1.price = 24000;
console.log(pro1.price);
console.log(`Discounted Price ${pro1.discountedPrice}`);


// O/P


// 26000
// Discounted Price 23400
// Invalid price
// 24000
// Discounted Price 21600