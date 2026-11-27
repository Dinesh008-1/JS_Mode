function getProduct(){
    return new Promise((_, reject) => {
        setTimeout(() => {
        reject(new Error("Product not found"));
        }, 2000);
    });
}

async function displayProduct() {
    try{
        const data = await getProduct();
        console.log(data.name);
    }catch(error){
        console.log("Error Occured");
    }finally{
        console.log("Request Completed");
    }
}

displayProduct();