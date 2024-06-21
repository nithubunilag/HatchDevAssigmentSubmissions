// Define a class for the linked list single_node
class single_Node<T> {
    data: T;
    next: single_Node<T> | null;

    constructor(data: T) {
        this.data = data;
        this.next = null;
    }
}

// Define the Queue class
class Queue<T> {
    private head: single_Node<T> | null;
    private tail: single_Node<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    // Add an element to the end of the queue
    enqueue(data: T): void {
        const newsingle_Node = new single_Node(data);

        if (!this.head) {
            this.head = newsingle_Node;
            this.tail = newsingle_Node;
        } else {
            this.tail!.next = newsingle_Node;
            this.tail = newsingle_Node;
        }
    }

    // Remove and return the element at the front of the queue
    dequeue(): T | null {
        if (!this.head) {
            return null;
        }

        const removedsingle_Node = this.head;
        this.head = this.head.next;

        if (!this.head) {
            this.tail = null;
        }

        return removedsingle_Node.data;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.head === null;
    }

    // Get the element at the front of the queue without removing it
    peek(): T | null {
        return this.head ? this.head.data : null;
    }

    // Get the size of the queue
    size(): number {
        let count = 0;
        let current = this.head;

        while (current) {
            count++;
            current = current.next;
        }

        return count;
    }
}

// Usage example
const queue = new Queue<number>();

queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false