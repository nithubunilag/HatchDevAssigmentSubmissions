class TaskManagerArray {
    private tasks: string[];

    constructor() {
        this.tasks = [];
    }

    addTask(task: string): void {
        this.tasks.push(task);
    }

    deleteTask(index: number): void {
        if (index >= 0 && index < this.tasks.length) {
            this.tasks.splice(index, 1);
        } else {
            console.log("Invalid index");
        }
    }

    displayTasks(): void {
        console.log("Tasks:");
        this.tasks.forEach((task, index) => {
            console.log(`${index + 1}. ${task}`);
        });
    }
}

// Example usage:
const taskManagerArray = new TaskManagerArray();
taskManagerArray.addTask("Buy groceries");
taskManagerArray.addTask("Read a book");
taskManagerArray.displayTasks();
taskManagerArray.deleteTask(0);
taskManagerArray.displayTasks();
