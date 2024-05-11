class Node<T> {
    data: T;
    next: Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null; 
    }
}

class LinkedList<T> {
    head: Node<T> | null;

    constructor() {
        this.head = null;
    }

    add(data: T) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;
    }

    print() {
        let curr = this.head;
        while (curr) {
            console.log(curr.data);
            curr = curr.next;
        }
    }

    remove(data: T) {
        if (!this.head) return;
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let curr = this.head;
        while (curr.next) {
            if (curr.next.data === data) {
                curr.next = curr.next.next;
                return;
            }
            curr = curr.next;
        }
    }

    reverse() {
        let curr = this.head;
        let prev: Node<T> | null = null;
        let next: Node<T> | null = null;
        while (curr) {
            next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
    }

    find(data: T) {
        let curr = this.head;
        while (curr) {
            if (curr.data === data) return curr;
            curr = curr.next;
        }
        return null;
    }
}

class Stack<T> {
    data: T[] = [];

    push(val: T) {
        this.data.push(val);
    }

    pop() {
        return this.data.pop();
    }

    peek() {
        return this.data[this.data.length - 1];
    }
}

interface Task {
    title: string;
    priority: number;
    completed: boolean;
    dueDate: Date | string;
}

class TaskManager extends LinkedList<Task> {
    completedTasks: CompletedTasks = new CompletedTasks();

    addTask(task: Task) {
        this.add(task);
    }

    private removeTask(task: Task) {
        this.remove(task);
    }

    completeTask(task: Task) {
        task.completed = true;
        this.completedTasks.addCompletedTask(task);
        this.removeTask(task);
    }
}

class CompletedTasks extends Stack<Task> {
    addCompletedTask(task: Task) {
        this.push(task);
    }
}

