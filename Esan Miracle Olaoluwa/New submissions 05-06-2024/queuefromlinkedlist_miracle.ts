// ESANMIRACLE OLAOLUWA
//miracleesan7@gmail.com
//MiracleDev0

class LNodes<T> {
    data: T;
    next: LNodes<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}
class Lqueue<T> {
    private head: LNodes<T> | null = null;
    private tail: LNodes<T> | null = null;
    private length = 0;

    enqueue(data: T): void {
        const newNode = new LNodes(data);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
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
    print () {
        let result: string = ""; // Initialize the 'result' variable with an empty string
        let current = this.head;
        while(current) {
            result += current.data + ` => `;
            current = current.next;
        }
        console.log(`${result} Null`);
    }
}

// Example usage:
const Iqueue = new Lqueue<number>();
Iqueue.enqueue(17);
Iqueue.enqueue(23);
Iqueue.enqueue(28);
console.log(Iqueue.dequeue()); // Output: 1
console.log(Iqueue.peek()); // Output: 2
console.log(Iqueue.size()); // Output: 2
console.log(Iqueue.isEmpty()); // Output: false
console.log(Iqueue.print()); // Output: 2 => 3 => Null