//implementing a stack using queue
class Stack<T> {
    private queue1: T[] = [];
    private queue2: T[] = [];

    push(element: T): void {
        this.queue1.push(element);
    }

    pop(): T | undefined {
        // If both queues are empty, the stack is empty
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }

        // Transfer all elements from queue1 to queue2 except the last element
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift() as T);
        }

        // Pop the last element from queue1
        const element = this.queue1.shift();

        // Swap queue1 and queue2
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        return element;
    }

    peek(): T | undefined {
        // If both queues are empty, the stack is empty
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }

        // Transfer all elements from queue1 to queue2 except the last element
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift() as T);
        }

        // Peek the last element from queue1
        const element = this.queue1.shift();

        // Swap queue1 and queue2
        [this.queue1, this.queue2] = [this.queue2, this.queue1];

        this.queue1.push(element as T);

        return element;
    }

    isEmpty(): boolean {
        // The stack is empty if both queues are empty
        return this.queue1.length === 0 && this.queue2.length === 0;
    }

    size(): number {
        // The size of the stack is the sum of the sizes of both queues
        return this.queue1.length + this.queue2.length;
    }
    print () {
        let result: string = ""; // Initialize the 'result' variable with an empty string
        this.queue1.forEach(element => {
            result += element + ` => `;
        });
        console.log(`${result} Null`);
    }
}

// Example usage:
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.pop();
console.log(stack.print());
console.log(stack.peek()); 
