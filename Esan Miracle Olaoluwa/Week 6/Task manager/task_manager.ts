interface Task {
    id: number;
    name: string;
    description: string;
}

class TaskNode {
    task: Task;
    next: TaskNode | null;

    constructor(task: Task) {
        this.task = task;
        this.next = null;
    }
}

class TaskManager {
    private tasks: Task[];
    private headNode: TaskNode | null;

    constructor() {
        this.tasks = [];
        this.headNode = null;
    }

    // Add a task to both the array and the linked list
    insertTask(task: Task) {
        this.tasks.push(task);

        const newTaskNode = new TaskNode(task);
        if (!this.headNode) {
            this.headNode = newTaskNode;
        } else {
            let currentNode = this.headNode;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = newTaskNode;
        }
    }

    // Remove a task from both the array and the linked list
    removeTask(taskId: number) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);

        if (!this.headNode) return;

        if (this.headNode.task.id === taskId) {
            this.headNode = this.headNode.next;
            return;
        }

        let currentNode = this.headNode;
        while (currentNode.next !== null) {
            if (currentNode.next.task.id === taskId) {
                currentNode.next = currentNode.next.next;
                return;
            }
            currentNode = currentNode.next;
        }
    }

    // Display tasks from both the array and the linked list
    showTasks() {
        console.log("Tasks in Array:");
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
        });

        console.log("\nTasks in Linked List:");
        let currentNode = this.headNode;
        while (currentNode !== null) {
            console.log(`ID: ${currentNode.task.id}, Name: ${currentNode.task.name}, Description: ${currentNode.task.description}`);
            currentNode = currentNode.next;
        }
    }
}

// Testing the TaskOrganizer
const taskOrganizer = new TaskManager();
taskOrganizer.insertTask({ id: 1, name: "Do assignments", description: "HatchDav assignment" });
taskOrganizer.insertTask({ id: 2, name: "Wash", description: "Make sure you wash!" });
taskOrganizer.showTasks();
taskOrganizer.removeTask(1);
taskOrganizer.showTasks();
