class Animal{
    constructor(name){
        this.name = name;
    }
    eat(){
        console.log(`${this.name} is eating`);
    }
}
class Dog extends Animal{
    bark(){
        console.log(`${this.name} barks bow bow bow`);
    }
}

const dg1 = new Dog("Tommy");

dg1.eat();
dg1.bark();