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

class TaskManager {
    tasks: Task[] = [];
    head: Task | null = null;

    // Add a new task
    addTask(id: number, description: string): void {
        const newTask = new Task(id, description);
        this.tasks.push(newTask);

        // Adding to linked list
        if (!this.head) {
            this.head = newTask;
        } else {
            let currentTask = this.head;
            while (currentTask.next !== null) {
                currentTask = currentTask.next;
            }
            currentTask.next = newTask;
        }
    }

    // Delete a task by ID
    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);

        // Deleting from linked list
        let currentTask = this.head;
        let prevTask: Task | null = null;
        while (currentTask !== null) {
            if (currentTask.id === id) {
                if (prevTask) {
                    prevTask.next = currentTask.next;
                } else {
                    this.head = currentTask.next;
                }
                break;
            }
            prevTask = currentTask;
            currentTask = currentTask.next;
        }
    }

    // Display all tasks
    displayTasks(): void {
        console.log("Tasks:");
        for (const task of this.tasks) {
            console.log(`ID: ${task.id}, Description: ${task.description}`);
        }
    }
}

// Usage
const taskManager = new TaskManager();
taskManager.addTask(1, "Do laundry");
taskManager.addTask(2, "Buy foodstuffs");
taskManager.addTask(3, "Prepare for cybersecurity class");

taskManager.displayTasks();

taskManager.deleteTask(2);

taskManager.displayTasks();
