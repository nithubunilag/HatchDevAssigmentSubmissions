class ListNode<T> {
    value: T;
    next: ListNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.next = null;
    }
}

class LinkedListQueue<T> {
    private head: ListNode<T> | null;
    private tail: ListNode<T> | null;

    constructor() {
        this.head = null;
        this.tail = null;
    }

    enqueue(item: T): void {
        const newNode = new ListNode(item);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
    }

    dequeue(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        return value;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    size(): number {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}


class LinkedListStack<T> {
    private head: ListNode<T> | null;

    constructor() {
        this.head = null;
    }

    push(item: T): void {
        const newNode = new ListNode(item);
        newNode.next = this.head;
        this.head = newNode;
    }

    pop(): T | undefined {
        if (!this.head) {
            return undefined;
        }
        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    isEmpty(): boolean {
        return this.head === null;
    }

    size(): number {
        let count = 0;
        let current = this.head;
        while (current) {
            count++;
            current = current.next;
        }
        return count;
    }
}


const linkedListStack = new LinkedListStack<number>();
linkedListStack.push(1);
linkedListStack.push(2);
console.log(linkedListStack.pop()); 
console.log(linkedListStack.pop()); 
console.log(linkedListStack.isEmpty());


const linkedListQueue = new LinkedListQueue<number>();
linkedListQueue.enqueue(1);
linkedListQueue.enqueue(2);
console.log(linkedListQueue.dequeue()); 
console.log(linkedListQueue.dequeue());
console.log(linkedListQueue.isEmpty());
