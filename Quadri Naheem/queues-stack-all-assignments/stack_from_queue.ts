class StackFromQueue<T> {
    private queue1: T[];
    private queue2: T[];

    constructor() {
        this.queue1 = [];
        this.queue2 = [];
    }

    push(item: T): void {
        this.queue1.push(item);
    }

    pop(): T | undefined {
        while (this.queue1.length > 1) {
            this.queue2.push(this.queue1.shift()!);
        }
        const poppedItem = this.queue1.shift();
        [this.queue1, this.queue2] = [this.queue2, this.queue1];
        return poppedItem;
    }

    isEmpty(): boolean {
        return this.queue1.length === 0;
    }

    size(): number {
        return this.queue1.length;
    }
}


const stackFromQueue = new StackFromQueue<number>();
stackFromQueue.push(1);
stackFromQueue.push(2);
console.log(stackFromQueue.pop());
console.log(stackFromQueue.pop());
console.log(stackFromQueue.isEmpty());
