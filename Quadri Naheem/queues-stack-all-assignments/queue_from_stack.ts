class QueueFromStack<T> {
    private stack1: T[];
    private stack2: T[];

    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(item: T): void {
        this.stack1.push(item);
    }

    dequeue(): T | undefined {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        return this.stack2.pop();
    }

    isEmpty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    size(): number {
        return this.stack1.length + this.stack2.length;
    }
}


const queueFromStack = new QueueFromStack<number>();
queueFromStack.enqueue(1);
queueFromStack.enqueue(2);
console.log(queueFromStack.dequeue());
console.log(queueFromStack.dequeue());
console.log(queueFromStack.isEmpty());
