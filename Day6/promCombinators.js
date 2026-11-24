let promise1 = Promise.resolve("Java");
let promise2 = Promise.reject(new Error("An Useless Error"));
let promise3 = Promise.resolve("React");
Promise.all([promise1,promise2,promise3])
.then((results) => {
    console.log(results);
})
.catch((error) =>{
    console.log("AN USELESS ERROR");
});

