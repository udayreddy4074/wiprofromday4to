// Define a Task interface
interface Task {
    id: number;
    title: string;
    description: string;
}

// Task Manager Class
class TaskManager {
    private tasks: Task[] = [];

    constructor() {
        this.loadTasks(); // Load tasks when the app starts
    }

    // Add a new task
    addTask(title: string, description: string): void {
        if (!title || !description) {
            alert("Please enter both title and description.");
            return;
        }

        const newTask: Task = {
            id: Date.now(),
            title,
            description
        };

        this.tasks.push(newTask);
        this.saveTasks();
        this.renderTasks();
    }

    // Edit an existing task
    editTask(id: number, newTitle: string, newDescription: string): void {
        const task = this.tasks.find(t => t.id === id);
        if (!task) return;

        task.title = newTitle;
        task.description = newDescription;
        this.saveTasks();
        this.renderTasks();
    }

    // Delete a task
    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
        this.saveTasks();
        this.renderTasks();
    }

    // Load tasks from localStorage
    loadTasks(): void {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            this.tasks = JSON.parse(savedTasks);
            this.renderTasks();
        }
    }

    // Save tasks to localStorage
    saveTasks(): void {
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
    }

    // Render tasks in the UI
    renderTasks(): void {
        const taskList = document.getElementById("taskList") as HTMLUListElement;
        taskList.innerHTML = "";

        this.tasks.forEach(task => {
            const li = document.createElement("li");
            li.innerHTML = `
                <span><strong>${task.title}</strong>: ${task.description}</span>
                <button class="edit" onclick="editTask(${task.id})">Edit</button>
                <button class="delete" onclick="deleteTask(${task.id})">Delete</button>
            `;
            taskList.appendChild(li);
        });
    }
}

// Create an instance of TaskManager
const taskManager = new TaskManager();

// Function to add a task
function addTask(): void {
    const titleInput = document.getElementById("taskTitle") as HTMLInputElement;
    const descInput = document.getElementById("taskDesc") as HTMLInputElement;

    taskManager.addTask(titleInput.value, descInput.value);

    // Clear input fields
    titleInput.value = "";
    descInput.value = "";
}

// Function to edit a task
function editTask(id: number): void {
    const newTitle = prompt("Enter new title:");
    const newDescription = prompt("Enter new description:");

    if (newTitle && newDescription) {
        taskManager.editTask(id, newTitle, newDescription);
    }
}

// Function to delete a task
function deleteTask(id: number): void {
    taskManager.deleteTask(id);
}

// Expose functions to window for HTML interaction
(window as any).addTask = addTask;
(window as any).editTask = editTask;
(window as any).deleteTask = deleteTask;
