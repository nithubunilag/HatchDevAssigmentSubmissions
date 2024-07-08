// ESANMIRACLE OLAOLUWA
//miracleesan7@gmail.com
//MiracleDev0

class LinkedlistNode<T> {
    data: T;
    next: LinkedlistNode<T> | null = null;

    constructor(data: T) {
        this.data = data;
    }
}
class linkedListStack <T>{
    private head: LinkedlistNode<T> | null = null;
    private length = 0;

    push(data: T): void {
        const newNode = new LinkedlistNode(data);
        if (this.head === null) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
    }

    pop(): T | undefined {
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
const lstack = new linkedListStack<number>();
lstack.push(1);
lstack.push(2);
lstack.push(3);
console.log(lstack.peek()); // Output: 3
console.log(lstack.size()); // Output: 3
console.log(lstack.print()); // Output: 3 => 2 => 1 => Null
