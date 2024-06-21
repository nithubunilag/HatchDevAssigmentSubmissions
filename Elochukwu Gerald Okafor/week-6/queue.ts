/**
 * FULLNAME: ELOCHUKWU GERALD OKAFOR
 * EMAIL: eogerald.07@gmail.com
 * GITHUB USERNAME: dev-xero
 */
/** Queue Data Structure
 * uses an array implementation
 */
export class Queue<T> {
    public data: T[];
    public size: number = 0;

    // Initialize with some data
    constructor(initial: T[]) {
        this.data = initial;
        this.size = initial.length;
    }

    // Enqueue
    public enqueue(item: T): void {
        this.data.push(item);
        this.size += 1;
    }

    // Enqueue many
    public enqueueMany(items: T[]): void {
        for (const item of items) {
            this.data.push(item);
            this.size += 1;
        }
    }

    // Dequeue
    public dequeue(): T | null {
        if (this.size > 0) {
            this.size -= 1;
            return this.data.shift() ?? null;
        }
        return null;
    }

    // Dequeue Many
    public dequeueMany(): T[] | null {
        if (this.size > 0) {
            const dequeued: T[] = [];
            while (this.size > 0) {
                this.size -= 1;
                dequeued.push(this.data.shift()!);
            }
            return dequeued;
        }
        return null;
    }

    // Returns the first item in the queue
    public top(): T | null {
        if (this.size > 0) {
            return this.data[0];
        }
        return null;
    }

    // Returns true if empty, false otherwise
    public isEmpty(): boolean {
        return this.size == 0;
    }

    // Print
    public print(): void {
        console.log('Size:', this.size);
        console.log('Data:', this.data);
    }
}
