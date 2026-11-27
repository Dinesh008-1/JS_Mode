//Remember that an async function automatically returns a Promise
async function getUser(){
    return {
        id:101,
        name:"Arav"
    };
}

getUser().then((data)=>{
    console.log(data.name);
})