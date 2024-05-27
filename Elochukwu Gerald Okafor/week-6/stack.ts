/**
 * FULLNAME: ELOCHUKWU GERALD OKAFOR
 * EMAIL: eogerald.07@gmail.com
 * GITHUB USERNAME: dev-xero
 */
export class Stack<T> {
    private data: T[];
    private size: number = 0;

    // Initialize the stack with some data
    constructor(initial: T[] = []) {
        this.data = initial.reverse();
        this.size = this.data.length;
    }

    // Push an item
    public push(item: T): void {
        this.data.unshift(item);
        this.size += 1;
    }

    // Pop an item
    public pop(): T | null {
        if (this.data.length > 0) {
            this.data.shift();
            this.size -= 1;
        }
        return null;
    }

    // Is the stack empty
    public isEmpty(): boolean {
        return this.data.length == 0;
    }

    // Iterate the items
    public iterate(): void {
        for (const [idx, item] of this.data.entries()) {
            console.log(`${idx + 1}. ${item}`);
        }
    }
}