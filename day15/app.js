// Task Manager Class
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = [];
        this.loadTasks(); // Load tasks when the app starts
    }
    // Add a new task
    TaskManager.prototype.addTask = function (title, description) {
        if (!title || !description) {
            alert("Please enter both title and description.");
            return;
        }
        var newTask = {
            id: Date.now(),
            title: title,
            description: description
        };
        this.tasks.push(newTask);
        this.saveTasks();
        this.renderTasks();
    };
    // Edit an existing task
    TaskManager.prototype.editTask = function (id, newTitle, newDescription) {
        var task = this.tasks.find(function (t) { return t.id === id; });
        if (!task)
            return;
        task.title = newTitle;
        task.description = newDescription;
        this.saveTasks();
        this.renderTasks();
    };
    // Delete a task
    TaskManager.prototype.deleteTask = function (id) {
        this.tasks = this.tasks.filter(function (task) { return task.id !== id; });
        this.saveTasks();
        this.renderTasks();
    };
    // Load tasks from localStorage
    TaskManager.prototype.loadTasks = function () {
        var savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks);
            this.renderTasks();
        }
    };
    // Save tasks to localStorage
    TaskManager.prototype.saveTasks = function () {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    };
    // Render tasks in the UI
    TaskManager.prototype.renderTasks = function () {
        var taskList = document.getElementById("taskList");
        taskList.innerHTML = "";
        this.tasks.forEach(function (task) {
            var li = document.createElement("li");
            li.innerHTML = "\n                <span><strong>".concat(task.title, "</strong>: ").concat(task.description, "</span>\n                <button class=\"edit\" onclick=\"editTask(").concat(task.id, ")\">Edit</button>\n                <button class=\"delete\" onclick=\"deleteTask(").concat(task.id, ")\">Delete</button>\n            ");
            taskList.appendChild(li);
        });
    };
    return TaskManager;
}());
// Create an instance of TaskManager
var taskManager = new TaskManager();
// Function to add a task
function addTask() {
    var titleInput = document.getElementById("taskTitle");
    var descInput = document.getElementById("taskDesc");
    taskManager.addTask(titleInput.value, descInput.value);
    // Clear input fields
    titleInput.value = "";
    descInput.value = "";
}
// Function to edit a task
function editTask(id) {
    var newTitle = prompt("Enter new title:");
    var newDescription = prompt("Enter new description:");
    if (newTitle && newDescription) {
        taskManager.editTask(id, newTitle, newDescription);
    }
}
// Function to delete a task
function deleteTask(id) {
    taskManager.deleteTask(id);
}
// Expose functions to window for HTML interaction
window.addTask = addTask;
window.editTask = editTask;
window.deleteTask = deleteTask;
