/**
 * the Task class for LinkedList
 */
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

/**
 * the task manager class
 */
class TaskManager {
    tasks: Task[];
    head: Task | null;

    constructor() {
        this.tasks = [];
        this.head = null;
    }

    addTask(description: string): void {
        const newTaskId = this.tasks.length + 1;
        const newTask = new Task(newTaskId, description);

        if (!this.head) {
            this.head = newTask;
        } else {
            let currentTask = this.head;
            while (currentTask.next !== null) {
                currentTask = currentTask.next;
            }
            currentTask.next = newTask;
        }

        this.tasks.push(newTask);
    }

    deleteTask(id: number): void {
        this.tasks = this.tasks.filter(task => task.id !== id);

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

    modifyTask(id: number, newDescription: string): void {
        //change task in array
        const taskToUpdate = this.tasks.find(task => task.id === id);
        if (taskToUpdate) {
            taskToUpdate.description = newDescription;
        } else {
            console.log("not found ");
        }

        //change task in linked list
        let currentTask = this.head;
        while (currentTask !== null) {
            if (currentTask.id === id) {
                currentTask.description = newDescription;
                break;
            }
            currentTask = currentTask.next;
        }
    }

    displayTasks(): void {
        let currentTask = this.head;
        while (currentTask !== null) {
            console.log(`Task ${currentTask.id}: ${currentTask.description}`);
            currentTask = currentTask.next;
        }
    }
}

const taskManager = new TaskManager();

taskManager.addTask("Complete HatchDev TypeScript Assignment");
taskManager.addTask("Go to HatchDev Class");
taskManager.addTask("Go to the cinema");

console.log("Before modification:");
taskManager.displayTasks();

taskManager.modifyTask(2, "Need to go to the bus stop first");
taskManager.deleteTask(1);

console.log("\nAfter modification and deletion:");
taskManager.displayTasks();
