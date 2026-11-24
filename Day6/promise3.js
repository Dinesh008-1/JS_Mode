const marksPromise = Promise.resolve(80);
marksPromise.then((num)=> num+5)
.then((addednum)=>addednum*2)
.then((ans)=>{
    console.log(`Final ans: ${ans}`);
})
.catch(()=>{
    console.log("An error occoured");
})