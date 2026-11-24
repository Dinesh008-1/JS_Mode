class Employee{
    constructor(name,empId){
        this.name = name;
        this.empId = empId;
    }
    getDetail(){
console.log(
`name: ${this.name},
employeeId: ${this.empId}   
`);
}
}
class Manager extends Employee{
    constructor(name,empId,dpt,tmSize){
        super(name,empId);
        this.department = dpt;
        this.teamSize = tmSize; 
    }
    getDetail(){
        console.log(
`name: ${this.name},
employeeId: ${this.empId},
department: ${this.department},
teamSize: ${this.teamSize}   
`);        
    }
}

const emp = new Manager("Dinesh",345,"Sales",5);
emp.getDetail();

