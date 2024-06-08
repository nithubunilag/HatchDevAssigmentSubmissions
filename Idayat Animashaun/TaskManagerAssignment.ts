class Task {
    id: number;
    description: string;

    constructor(id: number, description: string) {
        this.id = id;
        this.description = description;
    }

    
}

class ListNode {
    tasks: Task[] = [];
    next: ListNode | null = null;

    constructor(tasks: Task[]) {
        this.tasks = tasks;
    }
}

class TaskManagerLinkedList {
    private head: ListNode | null = null;
    private nextId: number = 1;

    addTask(description: string): void {
        const newTask = new Task(this.nextId++, description);
        const newNode = new ListNode([newTask]);
        
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

    deleteTask(id: number): void {
        if (!this.head) return;

        if (this.head.tasks.some(task => task.id === id)) {
            this.head.tasks = this.head.tasks.filter(task => task.id !== id);
            if (this.head.tasks.length === 0) {
                this.head = this.head.next;
            }
            return;
        }

        let current = this.head;
        while (current.next) {
            if (current.next.tasks.some(task => task.id === id)) {
                current.next.tasks = current.next.tasks.filter(task => task.id !== id);
                if (current.next.tasks.length === 0) {
                    current.next = current.next.next;
                }
                return;
            }
            current = current.next;
        }

    }

  

    displayTasks(): void {
        let current = this.head;
        while (current) {
            current.tasks.forEach(task => {
                console.log(`ID: ${task.id}, Description: ${task.description}`);
            });
            current = current.next;
        }
    }
    toArray(): Task[] {
        const tasksArray: Task[] = [];
        let current = this.head;
        while (current) {
            tasksArray.push(...current.tasks);
            current = current.next;
        }
        return tasksArray;
    }
}





// Test the TaskManagerLinkedList
const taskManagerLinkedList = new TaskManagerLinkedList();
taskManagerLinkedList.addTask("Getting a Good Job");
taskManagerLinkedList.addTask("Graduating from Nithub");
// Display tasks in the linkedList
console.log("Linked List Tasks:");
taskManagerLinkedList.displayTasks();
// Deleting tasks in the linkedList
taskManagerLinkedList.deleteTask(1);
taskManagerLinkedList.displayTasks();

// Convert linked list to array and display the array
const tasksArray = taskManagerLinkedList.toArray();
console.log("Array of Tasks:");
console.log(tasksArray);