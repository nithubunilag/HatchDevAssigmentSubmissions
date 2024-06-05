// name: Alfred Emmanuel
// github: Alfred-Emmanuel
// email: ealfred828@gmail.com

class Node<T> {
    data: T;
    next: Node<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}

class Queue<T> {
    private head: Node<T> | null = null;
    private tail: Node<T> | null = null;
    private length = 0;

    enqueue(data: T): void {
        const newNode = new Node(data);
        if (this.tail === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
    }

    dequeue(): T | undefined {
        if (this.head === null) {
            return undefined;
        }
        const data = this.head.data;
        this.head = this.head.next;
        if (this.head === null) {
            this.tail = null;
        }
        this.length--;
        return data;
    }

    peek(): T | undefined {
        return this.head?.data;
    }

    isEmpty(): boolean {
        return this.length === 0;
    }

    size(): number {
        return this.length;
    }

    print(): void {
        let result = "";
        let current = this.head;
        while (current) {
            result += current.data + " => ";
            current = current.next;
        }
        console.log(result + "Null");
    }
}

// Example usage:
const queue = new Queue<number>();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // Output: 1
console.log(queue.peek()); // Output: 2
console.log(queue.size()); // Output: 2
console.log(queue.isEmpty()); // Output: false
queue.print(); // Output: 2 => 3 => Null
