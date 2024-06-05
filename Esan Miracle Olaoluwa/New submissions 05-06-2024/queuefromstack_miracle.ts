// ESANMIRACLE OLAOLUWA
//miracleesan7@gmail.com
//MiracleDev0

//Implementing queue using two stacks[because stacks use the LIFO rule and queues use the FIFO rule]

class Queue<T> {
    private stack1: T[] = [];
    private stack2: T[] = [];

    enqueue(element: T): void {
        this.stack1.push(element);
    }

    dequeue(): T | undefined {
        // If both stacks are empty, the queue is empty
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        // If stack2 is empty, transfer all elements from stack1 to stack2
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop() as T);
            }
        }

        // Pop the element from stack2
        return this.stack2.pop();
    }

    peek(): T | undefined {
        // If both stacks are empty, the queue is empty
        if (this.isEmpty()) {
            throw new Error("Queue is empty");
        }

        // If stack2 is empty, transfer all elements from stack1 to stack2
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop() as T);
            }
        }

        // Peek the element from stack2
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty(): boolean {
        // The queue is empty if both stacks are empty
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    print(): void {
        let result: string = ""; // Initialize the 'result' variable with an empty string
        this.stack1.forEach(element => {
            result += element + ` => `;
        });
        console.log(`${result} Null`);
    }
}

// Example usage:
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.print()); 
