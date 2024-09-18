class Node<T> {
    value: T;
    next: Node<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}
class Stack<T> {
    private head: Node<T> | null = null;
    private size: number = 0;

    push(value: T): void {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    pop(): T | null {
        if (!this.head) return null;

        const poppedValue = this.head.value;
        this.head = this.head.next;
        this.size--;
        return poppedValue;
    }

    peek(): T | null {
        if (!this.head) return null;
        return this.head.value;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    print(): void {
        let current = this.head;
        const result: T[] = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}
class Queue<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private size: number = 0;

    enqueue(value: T): void {
        const newNode = new Node(value);
        if (this.tail) {
            this.tail.next = newNode;
        }
        this.tail = newNode;
        if (!this.head) {
            this.head = newNode;
        }
        this.size++;
    }

    dequeue(): T | null {
        if (!this.head) return null;

        const dequeuedValue = this.head.value;
        this.head = this.head.next;
        if (!this.head) {
            this.tail = null;
        }
        this.size--;
        return dequeuedValue;
    }

    peek(): T | null {
        if (!this.head) return null;
        return this.head.value;
    }

    getSize(): number {
        return this.size;
    }

    isEmpty(): boolean {
        return this.size === 0;
    }

    print(): void {
        let current = this.head;
        const result: T[] = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }
}

const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.print(); 
console.log('Popped:', stack.pop()); 
stack.print(); 


const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.print(); 
console.log('Dequeued:', queue.dequeue()); 
queue.print(); 
