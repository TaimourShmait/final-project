function addTask(task) {
    taskInput.value = "";
    
    const taskContainer = document.createElement("div");
    taskContainer.classList.add("task-container");
    
    const taskCheckContainer = document.createElement("div");
    taskCheckContainer.classList.add("task-check-container");
    const taskCheckBox = document.createElement("input");
    taskCheckBox.type = "checkbox";
    const taskP = document.createElement("p");
    taskP.textContent = task.slice(0, 50);

    taskCheckContainer.appendChild(taskCheckBox);
    taskCheckContainer.appendChild(taskP);

    const taskEditContainer = document.createElement("div");
    taskEditContainer.classList.add("task-edit-container");
    const editTaskBtn = document.createElement("button");
    editTaskBtn.textContent = "Edit";
    editTaskBtn.classList.add("edit-task-btn");
    const removeTaskBtn = document.createElement("button");
    removeTaskBtn.textContent = "Remove";
    removeTaskBtn.classList.add("remove-task-btn");

    taskEditContainer.appendChild(editTaskBtn);
    taskEditContainer.appendChild(removeTaskBtn);

    taskContainer.appendChild(taskCheckContainer);
    taskContainer.appendChild(taskEditContainer);
    tasksContainer.appendChild(taskContainer);
}

function editTask(editBtn) {
    const taskContainer = editBtn.closest(".task-container");
    const taskCheckContainer = taskContainer.querySelector(".task-check-container");
    const taskP = taskCheckContainer.querySelector("p");
    
    const taskEditInput = document.createElement("input");
    taskEditInput.placeholder = "Edit Task";
    taskEditInput.type = "text";
    taskEditInput.classList.add("task-edit-input");
    taskEditInput.value = taskP.textContent;

    taskCheckContainer.replaceChild(taskEditInput, taskP);

    editBtn.textContent = "Save";
    editBtn.classList.remove("edit-task-btn");
    editBtn.classList.add("save-task-btn");

    taskEditInput.focus();
}

function saveTask(saveBtn) {
    const taskContainer = saveBtn.closest(".task-container");
    const taskCheckContainer = taskContainer.querySelector(".task-check-container");
    const taskEditInput = taskCheckContainer.querySelector(".task-edit-input");
    
    if (taskEditInput.value === "") {
        return;
    }

    const taskP = document.createElement("p");
    taskP.textContent = taskEditInput.value.slice(0, 50);

    taskCheckContainer.replaceChild(taskP, taskEditInput);

    saveBtn.textContent = "Edit";
    saveBtn.classList.remove("save-task-btn");
    saveBtn.classList.add("edit-task-btn");
}

function removeTask(removeBtn) {
    const taskContainer = removeBtn.closest(".task-container");
    taskContainer.remove();
}

function toggleTheme(toggleThemeBtn) {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    if (isDark) {
        toggleThemeBtn.textContent = "☀️";
    } else {
        toggleThemeBtn.textContent = "🌙";
    }
}

const toggleThemeBtn = document.querySelector("#toggle-theme-btn");
const taskInput = document.querySelector("#task-input");
const addTaskBtn = document.querySelector("#add-task-btn");
const tasksContainer = document.querySelector("#tasks-container");
const editTaskBtns = document.querySelectorAll(".edit-task-btn");
const removeTaskBtns = document.querySelectorAll(".remove-task-btn");

toggleThemeBtn.addEventListener("click", (e) => {
    toggleTheme(toggleThemeBtn);
});

addTaskBtn.addEventListener("click", (e) => {
    if (taskInput.value !== "") {
        addTask(taskInput.value);
    }
});

taskInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && taskInput.value !== "") {
        addTask(taskInput.value);
    }
});

// Use event delegation for dynamically created edit/remove/save buttons

tasksContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("edit-task-btn")) {
        editTask(e.target);
    } else if (e.target.classList.contains("save-task-btn")) {
        saveTask(e.target);
    } else if (e.target.classList.contains("remove-task-btn")) {
        removeTask(e.target);
    }
});
