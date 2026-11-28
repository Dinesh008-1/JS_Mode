const input = document.querySelector("#inputbox");
const header = document.querySelector("h1");
input.addEventListener("keydown",(event)=>{
    console.log("Key is pressed");
    if(event.key === "Enter"){
        header.textContent = input.value;
    }
})
