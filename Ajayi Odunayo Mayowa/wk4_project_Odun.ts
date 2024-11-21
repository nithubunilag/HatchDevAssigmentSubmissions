interface Task {
    id: number;
    name: string;
    description: string;
}

class ListNode {
    task: Task;
    next: ListNode | null;

    constructor(task: Task) {
        this.task = task;
        this.next = null;
    }
}

class TaskManager {
    private tasksArray: Task[];
    private head: ListNode | null;

    constructor() {
        this.tasksArray = [];
        this.head = null;
    }

    // Add task to both array and linked list
    addTask(task: Task) {
        this.tasksArray.push(task);

        const newNode = new ListNode(task);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    // Delete task from both array and linked list
    deleteTask(taskId: number) {
        this.tasksArray = this.tasksArray.filter(task => task.id !== taskId);

        if (!this.head) return;

        if (this.head.task.id === taskId) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next !== null) {
            if (current.next!.task.id === taskId) {
                current.next = current.next.next;
                return;
            }
            current = current.next;
        }
    }

    // Display tasks from both array and linked list
    displayTasks() {
        console.log("Tasks in Array:");
        this.tasksArray.forEach(task => {
            console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
        });

        console.log("\nTasks in Linked List:");
        let current = this.head;
        while (current !== null) {
            console.log(`ID: ${current.task.id}, Name: ${current.task.name}, Description: ${current.task.description}`);
            current = current.next;
        }
    }
}


const taskManager = new TaskManager();
taskManager.addTask({ id: 1, name: "Study Calculus", description: "Read about functions and limits" });
taskManager.addTask({ id: 2, name: "Eat Lunch", description: "Buy Korede spaghetti" });
taskManager.displayTasks();
taskManager.deleteTask(1);
taskManager.displayTasks();
