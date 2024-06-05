class StackUsingQueues<T> {
    private queue1: T[];
    private queue2: T[];

    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    // Push operation
    push(element: T): void {
        this.queue2.push(element);

        // Transfer all elements from queue1 to queue2
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift()!);
        }

        // Swap the names of queue1 and queue2
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
    }

    // Pop operation
    pop(): T | undefined {
        return this.queue1.shift();
    }

    // Peek operation to get the top element
    peek(): T | undefined {
        return this.queue1[0];
    }

    // Check if the stack is empty
    isEmpty(): boolean {
        return this.queue1.length === 0;
    }
}

// Example usage
const stack = new StackUsingQueues<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.pop()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.pop()); // Output: 1
console.log(stack.isEmpty()); // Output: true