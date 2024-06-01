import Stack from "../../Week5/classworks/Stack/stack";

interface Queue<T> {
    enqueue(item: T): void;
    dequeue(): T | undefined;
    peek(): T | undefined;
    size(): number;
}

export class QueueFromStack<T> implements Queue<T> {
    private firstStack: Stack<T>;
    private secondStack: Stack<T>;

    constructor() {
        this.firstStack = new Stack();
        this.secondStack = new Stack();
    }

    enqueue(item: T): void {
        this.firstStack.push(item);
    }

    dequeue(): T | undefined {
        if (this.secondStack.size() === 0) {
            while (this.firstStack.size() > 0) {
                this.secondStack.push(this.firstStack.pop()!);
            }
        }
        return this.secondStack.pop();
    }

    peek(): T | undefined {
        if (this.secondStack.size() === 0) {
            while (this.firstStack.size() > 0) {
                this.secondStack.push(this.firstStack.pop()!);
            }
        }
        return this.secondStack.peek();
    }

    size(): number {
        return this.firstStack.size() + this.secondStack.size();
    }
}