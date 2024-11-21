// Queue class
class Queue {
    // Stack to store elements
    private stack: any[];

    constructor() {
        this.stack = [];
    }

    // Add an element to the queue
    enqueue(element: any): void {
        // Create a temporary stack
        const tempStack: any[] = [];

        // Move all elements from the main stack to the temporary stack
        while (this.stack.length > 0) {
            tempStack.push(this.stack.pop());
        }

        // Add the new element to the temporary stack
        tempStack.push(element);

        // Move all elements back to the main stack
        while (tempStack.length > 0) {
            this.stack.push(tempStack.pop());
        }
    }

    // Remove and return the first element from the queue
    dequeue(): any {
        if (this.isEmpty()) {
            return undefined;
        }

        return this.stack.pop();
    }

    // Check if the queue is empty
    isEmpty(): boolean {
        return this.stack.length === 0;
    }

    // Get the size of the queue
    size(): number {
        return this.stack.length;
    }

    // Clear the queue
    clear(): void {
        this.stack = [];
    }
}

// Usage example
const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue.dequeue()); // Output: 1
console.log(queue.dequeue()); // Output: 2

queue.enqueue(4);
console.log(queue.size()); // Output: 2

queue.clear();
console.log(queue.isEmpty()); // Output: true