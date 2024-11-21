// Define a Task class
class Task {
    id: number;
    description: string;
    next: Task | null;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
        this.next = null;
    }
}

// Define a TaskManager class
class TaskManager {
    tasks: Task[] = [];
    head: Task | null = null;

    // Add a new task to the task manager
    addTask(id: number, description: string): void {
        const newTask = new Task(id, description);
        this.tasks.push(newTask);
        if (!this.head) {
            this.head = newTask;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newTask;
        }
    }

    // Delete a task from the task manager
    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);
        if (this.head && this.head.id === id) {
            this.head = this.head.next;
        } else {
            let current = this.head;
            while (current && current.next !== null) {
                if (current.next.id === id) {
                    current.next = current.next.next;
                    break;
                }
                current = current.next;
            }
        }
    }

    // Display all tasks
    displayTasks(): void {
        console.log("Tasks:");
        for (const task of this.tasks) {
            console.log(`Task ID: ${task.id}, Description: ${task.description}`);
        }
    }
}

// Example usage
const taskManager = new TaskManager();
taskManager.addTask(1, "Buy groceries");
taskManager.addTask(2, "Finish project");
taskManager.addTask(3, "Go to gym");

taskManager.displayTasks();

taskManager.deleteTask(2);

taskManager.displayTasks();
