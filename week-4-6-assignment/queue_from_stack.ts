class QueueUsingStacks<T> {
    size(): any {
        throw new Error("Method not implemented.");
    }
    private stack1: T[];
    private stack2: T[];

    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    // Enqueue operation
    enqueue(element: T): void {
        this.stack1.push(element);
    }

    // Dequeue operation
    dequeue(): T | undefined {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        return this.stack2.pop();
    }

    // Peek operation to get the front element
    peek(): T | undefined {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }
}

// Example usage
const queue = new QueueUsingStacks<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek());    // Output: 2
console.log(queue.dequeue()); // Output: 2
console.log(queue.isEmpty()); // Output: false
console.log(queue.dequeue()); // Output: 3
console.log(queue.isEmpty()); // Output: true