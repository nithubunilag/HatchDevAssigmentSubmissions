class Stack<T> {
    private data: T[];
    private size: number = 0;
    private capacity: number;

    // Initialize the stack with some data
    constructor(initial: T[] = [], capacity: number) {
        if (initial.length > capacity) {
            throw new Error('Initial data exceeds stack capacity.');
        }
        this.data = initial.reverse();
        this.capacity = capacity;
        this.size = this.data.length;
    }

    // Push an item
    public push(item: T): void {
        if (this.size + 1 > this.capacity) {
            throw new Error('Pushing new item exceeds stack capacity.');
        }
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

const callStack = new Stack(
    ['end', 'print variable height', 'create variable height = 1'],
    4
);

callStack.push('start');
// callStack.push('fail');
console.log('Is empty:', callStack.isEmpty());
callStack.iterate();
