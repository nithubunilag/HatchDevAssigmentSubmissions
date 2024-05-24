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

    // Dequeue
    public dequeue(): T | null {
        if (this.size > 0) {
            this.size -= 1;
            return this.data.shift() ?? null;
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

    // Print
    public print(): void {
        console.log('Size:', this.size);
        console.log('Data:', this.data);
    }
}
