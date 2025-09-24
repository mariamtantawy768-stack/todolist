let firstInput = document.getElementById("one");
let addTask = document.getElementById("two");
let tasksBox = document.getElementById("tasks");

addTask.addEventListener('click' , () => {

    let val1 = firstInput.value.trim();

    if (val1 !== "") {
        let task = document.createElement("p");

        task.textContent = val1;
        task.classList.add("task-item")
        tasksBox.appendChild(task);

        let submit = document.createElement("input");
        submit.type = "checkbox" ;
        

        submit.classList.add("smt-item");
        submit.addEventListener("change", () => {
            task.classList.toggle("done", submit.checked);
         })
        task.appendChild(submit);
    }
    
    firstInput.value = "";
})
