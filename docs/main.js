let addTask  = document.getElementById("two") ;
let firstInput = document.getElementById('one');
let  tasksBox   = document.getElementById('tasks');
addTask.value = "Add Task";

addTask.addEventListener('click' , () => {
    let val1 = firstInput.value.trim();
    
    if(val1 !== "") {
        let task = document.createElement("p")
        task.textContent = val1;

        tasksBox.appendChild(task);
        task.classList.add("task-item")

        let dltbtn = document.createElement("Button")
        dltbtn.textContent = "Delete";

        dltbtn.addEventListener("click", () => {
            task.remove();
        })
        task.appendChild(dltbtn);
        
        dltbtn.classList.add("dlt-item")
        firstInput.value = "" ;
        dltbtn.value = "";
    }
})



