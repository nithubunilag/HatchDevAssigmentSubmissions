class a_Stack {
    private queue: any[];

    constructor() {
        this.queue = [];
    }

    push(item: any): void {
        // To simulate a a_Stack, we need to reverse the order of elements in the queue.
        // So, we first enqueue the new item, then dequeue and enqueue all existing items.
        const size = this.queue.length;
        this.queue.push(item);
        for (let i = 0; i < size; i++) {
            this.queue.push(this.queue.shift());
        }
    }

    pop(): any {
        // Since the top element of the a_Stack is always at the front of the queue,
        // we can simply dequeue and return it.
        return this.queue.shift();
    }

    peek(): any {
        // The top element of the a_Stack is always at the front of the queue.
        return this.queue[0];
    }

    isEmpty(): boolean {
        // The a_Stack is empty if the queue is empty.
        return this.queue.length === 0;
    }

    clear(): void {
        // To clear the a_Stack, we simply reset the queue to an empty array.
        this.queue = [];
    }
}

// Usage example:
const cooler_stackl = new a_Stack();
cooler_stackl.push(3);
console.log(cooler_stackl.pop()); // Output: 3
console.log(cooler_stackl.peek()); // Output: 2
console.log(cooler_stackl.isEmpty()); // Output: false
cooler_stackl.clear();
console.log(cooler_stackl.isEmpty()); // Output: true
