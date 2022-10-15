import checkComplete  from "./components/checkComplete.js";
import deleteIcon from "./components/deleteIcon.js";

(() => {
const btn = document.querySelector("[data-form-btn]");

const createTask = (e) =>{
    e.preventDefault();
    const titleTask = document.createElement("span");
    const input = document.querySelector("[data-form-input]");
    const value = input.value;
    const list = document.querySelector("[data-list]");
    const task = document.createElement("li");
    task.classList.add("card");
    input.value = "";
    const taskContent = document.createElement("div");
    taskContent.appendChild(checkComplete());
    taskContent.appendChild(titleTask);
    //taskContent.appendChild(deleteIcon());
   
    titleTask.classList.add("task");
    titleTask.innerText = value;
     
    //task.innerHTML = content;  
    
    task.appendChild(taskContent);
    task.appendChild(deleteIcon());
    list.appendChild(task);              
    
}

btn.addEventListener("click", createTask);

})();
