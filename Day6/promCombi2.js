let promise1 = Promise.resolve("Student result came");
let promise2 = Promise.resolve("Student Grade");
let promise3 = Promise.reject(new Error("Student photo not loaded"));
let promise4 = Promise.reject(new Error("Student fullname not loaded"));

Promise.allSettled([promise1,promise2,promise3,promise4])
.then((results) => {
    console.log(results);
});