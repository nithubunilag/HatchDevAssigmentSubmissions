class StackFromQueues<T> {
    private queue1: T[] = [];
    private queue2: T[] = [];

    push(value: T): void {
        this.queue2.push(value);
        while (this.queue1.length > 0) {
            this.queue2.push(this.queue1.shift()!);
        }
        const temp = this.queue1;
        this.queue1 = this.queue2;
        this.queue2 = temp;
    }

    pop(): T | undefined {
        return this.queue1.shift();
    }

    peek(): T | undefined {
        return this.queue1[0];
    }

    isEmpty(): boolean {
        return this.queue1.length === 0;
    }

    getSize(): number {
        return this.queue1.length;
    }

    print(): void {
        console.log(this.queue1.join(' -> '));
    }
}

const stack = new StackFromQueues<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log('Popped:', stack.pop()); 
stack.print();
