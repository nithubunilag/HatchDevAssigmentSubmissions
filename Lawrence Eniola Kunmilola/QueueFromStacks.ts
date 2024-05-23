class QueueFromStacks<T> {
    private stack1: T[] = [];
    private stack2: T[] = [];


    enqueue(value: T): void {
        this.stack1.push(value);
    }

    dequeue(): T | undefined {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        return this.stack2.pop();
    }

    peek(): T | undefined {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        return this.stack2[this.stack2.length - 1];
    }

    isEmpty(): boolean {
        return this.stack1.length === 0 && this.stack2.length === 0;
    }

    getSize(): number {
        return this.stack1.length + this.stack2.length;
    }

    print(): void {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop()!);
            }
        }
        console.log([...this.stack2].reverse().join(' -> '));
    }
}

const queue = new QueueFromStacks<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); 
console.log('Dequeued:', queue.dequeue()); 
queue.print(); 
