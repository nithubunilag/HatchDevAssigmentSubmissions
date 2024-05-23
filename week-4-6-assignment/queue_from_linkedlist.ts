class QLNode<T> {
    value: T;
    next: QLNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
        this.next = null
    }
}

class LinkedListQueue<T> {
    private head: QLNode<T> | null = null;
    private tail: QLNode<T> | null = null;
    private length: number = 0;

    // Enqueue operation
    enqueue(value: T): void {
        const newNode = new QLNode(value);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
        this.length++;
    }

    // Dequeue operation
    dequeue(): T | undefined {
        if (!this.head) return undefined;
        const value = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.length--;
        return value;
    }

    // Peek operation to get the front element
    peek(): T | undefined {
        return this.head ? this.head.value : undefined;
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.length === 0;
    }

    // Get the size of the queue
    size(): number {
        return this.length;
    }
}

// Example usage of LinkedListQueue
const queue = new LinkedListQueue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.size()); // Output: 2
console.log(queue.dequeue()); // Output: 2
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true