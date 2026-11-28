let count = 0;
const header = document.querySelector("h1");
const increaseButt = document.querySelector("#inc");
const decreaseButt = document.querySelector("#dec");

function displayCount(){
    header.textContent = count;
}

increaseButt.addEventListener("click",() => {
    count++;
    displayCount();
});
decreaseButt.addEventListener("click",() => {
    if(count===0){
        return;
    }
    count--;
    displayCount();
});