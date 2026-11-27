function getEmployee() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        empId: 102,
        name: "Jhon",
      });
    }, 1000);
  });
}

function getDepartment() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        depId: 102,
        name: "HR",
      });
    }, 2000);
  });
}

function getSalary() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        salary: 50000,
      });
    }, 1500);
  });
}

async function main() {
    try{
        const [emp,dep,sal] = await Promise.all([getEmployee(),getDepartment(),getSalary()]);
        console.log(
        `Name of employee:${emp.name}
        Department:${dep.name}
        Salary:${sal.salary}`);
    }catch(error){
        console.log("An Error Occurred");
    }finally{
        console.log("Request Completed");
    }
}
main();
