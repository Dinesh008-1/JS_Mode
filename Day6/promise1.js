let loginPromise = new Promise((resolve,reject) => {
    const loginSuccess = false;
    if(loginSuccess){
        return resolve("Login is Successful");
    }
    return reject(new Error("An incredable error"));
});

console.log(loginPromise);
loginPromise.then((data) => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});//Always chain it to catch error if occured in .then