const parent = document.querySelector("#parent");
const button = document.querySelector("#butt");

parent.addEventListener("click",()=>{
    console.log("Parent capturing");
},{capture: true});

button.addEventListener("click",()=>{
    console.log("button clicked");
});

parent.addEventListener("click",()=>{
    console.log("parent bubbling");
});