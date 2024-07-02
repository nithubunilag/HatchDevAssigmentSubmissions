/**
 * FULLNAME: ELOCHUKWU GERALD OKAFOR
 * EMAIL: eogerald.07@gmail.com
 * GITHUB USERNAME: dev-xero
 */
import { Queue } from './queue.ts';

/** Implements a stack from a queue */
class StackFromQueue<T> {
    public stackQueue: Queue<T>;
    public size: number = 0;

    // Initialize with some data
    constructor(initial: T[]) {
        if (initial.length > 0) {
            this.stackQueue = new Queue([]);
            this.size = initial.length;
            // Enqueue from the end
            for (let i = this.size - 1; i > -1; i--) {
                this.stackQueue.enqueue(initial[i]);
            }
        }
    }

    // Push
    public push(item: T): void {
        this.stackQueue.enqueue(item);
        this.size += 1;
        // Reverse the stack queue
        for (let i = 0; i < this.size - 1; i++) {
            this.stackQueue.enqueue(this.stackQueue.dequeue()!);
        }
    }

    // Pop
    public pop(): T | null {
        if (this.size > 0) {
            return this.stackQueue.dequeue();
        }
        return null;
    }
}

const qStack = new StackFromQueue(['this', 'is', 'a', 'stack']);
qStack.push('ok');
qStack.push('nice');

console.log("Popped:", qStack.pop()); // returns 'nice'
console.log(qStack.stackQueue);
