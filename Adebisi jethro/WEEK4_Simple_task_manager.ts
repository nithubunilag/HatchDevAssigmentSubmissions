//adebisirevel@gmail.com
//Adebisi Jethro Boluwatife
// Task Manager

// Define the interface for the task
class Task {
    id: number;
    description: string;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
    }
}

  // Define the Task Manager class with arrays
  class TaskManagerArray {
    tasks: Task[] = [];

    addTask(description: string) {
        const id = this.tasks.length + 1;
        const task = new Task(id, description);
        this.tasks.push(task);
    }

    deleteTask(id: number) {
        this.tasks = this.tasks.filter(task => task.id !== id);
    }

    displayTasks() {
        this.tasks.forEach(task => {
            console.log(`ID: ${task.id}, Description: ${task.description}`);
        });
    }
}

// Define the Task Manager class with linked list
  
class ListNode {
    task: Task;
    next: ListNode | null = null;

    constructor(task: Task) {
        this.task = task;
    }
}

  
//Implement the TaskManagerLinkedList Class

class TaskManagerLinkedList {
    head: ListNode | null = null;

    addTask(description: string) {
        const id = this.getNextId();
        const task = new Task(id, description);
        const newNode = new ListNode(task);

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

    deleteTask(id: number) {
        if (!this.head) return;

        if (this.head.task.id === id) {
            this.head = this.head.next;
            return;
        }

        let current = this.head;
        while (current.next && current.next.task.id !== id) {
            current = current.next;
        }

        if (current.next) {
            current.next = current.next.next;
        }
    }

    displayTasks() {
        let current = this.head;
        while (current) {
            console.log(`ID: ${current.task.id}, Description: ${current.task.description}`);
            current = current.next;
        }
    }

    private getNextId(): number {
        let current = this.head;
        let maxId = 0;
        while (current) {
            if (current.task.id > maxId) {
                maxId = current.task.id;
            }
            current = current.next;
        }
        return maxId + 1;
    }
}

const arrayManager = new TaskManagerArray();
arrayManager.addTask("Task 0");
arrayManager.addTask("Task 1");
arrayManager.displayTasks();
arrayManager.deleteTask(1);
arrayManager.displayTasks();

const linkedListManager = new TaskManagerLinkedList();
linkedListManager.addTask("Task 0");
linkedListManager.addTask("Task 1");
linkedListManager.displayTasks();
linkedListManager.deleteTask(1);
linkedListManager.displayTasks();
