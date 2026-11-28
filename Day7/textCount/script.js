const textArea = document.querySelector("#messageInput");
const charCount = document.querySelector("#charCount");
textArea.addEventListener("input",()=>{
    let len = textArea.value.length;
    charCount.textContent = `${len} / 100 characters`;
});