const inputTab = document.querySelector("#text")
const addButton = document.querySelector("#add-butt")
const delButton = document.querySelector("#del-butt")
const taskList = document.querySelector("#task-list");

//adding element

function addElement(){
    const data = inputTab.value.trim();
    const li = document.createElement("li");
    li.textContent = data;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    li.append(deleteButton);
    taskList.append(li);
    inputTab.value = "";
}
addButton.addEventListener("click",addElement)
