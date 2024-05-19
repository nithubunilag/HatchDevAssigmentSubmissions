class TaskNode {
    public task: string;
    public next: TaskNode | null;

    constructor(task: string) {
        this.task = task;
        this.next = null;
    }
}

class TaskManager {
    private head: TaskNode | null;

    constructor() {
        this.head = null;
    }

    // Add a new task to the task manager
    addTask(task: string): void {
        const newNode = new TaskNode(task);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Delete a task from the task manager
    deleteTask(task: string): void {
        if (!this.head) return;

        if (this.head.task === task) {
            this.head = this.head.next;
            return;
        }

        let prev: TaskNode | null = null;
        let current: TaskNode | null = this.head;
        while (current && current.task !== task) {
            prev = current;
            current = current.next;
        }

        if (current) {
            prev!.next = current.next;
        }
    }

    // Display all tasks in the task manager
    displayTasks(): void {
        let current = this.head;
        while (current) {
            console.log(current.task);
            current = current.next;
        }
    }
}

// Example usage:
const taskManager = new TaskManager();
taskManager.addTask("Task 1");
taskManager.addTask("Task 2");
taskManager.addTask("Task 3");
taskManager.displayTasks(); // Display all tasks
console.log("Deleting Task 2...");
taskManager.deleteTask("Task 2"); // Delete a task
taskManager.displayTasks(); // Display all tasks after deletion



