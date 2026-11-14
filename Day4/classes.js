class Student{
    constructor(name,age,course){
        this.name = name;
        this.age = age;
        this.course = course;
    }
    introduce(){
        console.log(`I'm ${this.name} , ${this.age} years old, currently enrolled in ${this.course} course`)
    }
}

const std1= new Student("Dinesh",19,"Python");
const std2= new Student("Leo",35,"Coffee Making");

std1.introduce();
std2.introduce();