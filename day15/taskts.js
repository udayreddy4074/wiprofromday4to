// Implement the TaskManager class
var TaskManage = /** @class */ (function () {
    function TaskManage() {
        this.tasks = [];
    }
    TaskManage.prototype.addTask = function (task) {
        this.tasks.push(task);
        console.log("Task added successfully: ".concat(task.title));
        renderTasks(); // Update the UI after adding
    };
    TaskManage.prototype.viewTasks = function () {
        return this.tasks;
    };
    TaskManage.prototype.modifyTask = function (id, updatedTask) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (!task) {
            console.log("Error: Task with ID ".concat(id, " does not exist."));
            return;
        }
        Object.assign(task, updatedTask);
        console.log("Task modified successfully: ".concat(task.title));
        renderTasks(); // Update the UI after modification
    };
    TaskManage.prototype.deleteTask = function (id) {
        var index = this.tasks.findIndex(function (t) { return t.id === id; });
        if (index === -1) {
            console.log("Error: Task with ID ".concat(id, " does not exist."));
            return;
        }
        this.tasks.splice(index, 1);
        console.log("Task deleted successfully.");
        renderTasks(); // Update the UI after deletion
    };
    return TaskManage;
}());
// Create a global instance of TaskManager
var manage = new TaskManage();
// Function to add a task from HTML input
function addNewTask() {
    var titleInput = document.getElementById("taskTitle");
    var descInput = document.getElementById("taskDesc");
    if (!titleInput.value || !descInput.value) {
        alert("Please enter a task title and description.");
        return;
    }
    var newTask = {
        id: Date.now(), // Generate unique ID
        title: titleInput.value,
        description: descInput.value,
        completed: false,
    };
    manage.addTask(newTask);
    // Clear input fields
    titleInput.value = "";
    descInput.value = "";
}
// Function to delete a task from HTML
function deleteTask(id) {
    manage.deleteTask(id);
}
// Function to render tasks in the HTML
function renderTasks() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; // Clear existing list
    manage.viewTasks().forEach(function (task) {
        var li = document.createElement("li");
        li.innerHTML = "\n            ".concat(task.title, " - ").concat(task.description, " \n            <button onclick=\"deleteTask(").concat(task.id, ")\">Delete</button>\n        ");
        taskList.appendChild(li);
    });
}
// Attach functions to window for HTML access
window.addNewTask = addNewTask;
window.deleteTask = deleteTask;
//In order to window - use the command - tsc task.ts --target es6
