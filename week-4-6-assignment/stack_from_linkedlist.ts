class SLNode<T> {
    value: T;
    next: SLNode<T> | null = null;

    constructor(value: T) {
        this.value = value;
    }
}

class LinkedListStack<T> {
    private head: SLNode<T> | null = null;
    private length: number = 0;

    // Push operation
    push(value: T): void {
        const newNode = new SLNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }

    // Pop operation
    pop(): T | undefined {
        if (!this.head) return undefined;
        const value = this.head.value;
        this.head = this.head.next;
        this.length--;
        return value;
    }

    // Peek operation to get the top element
    peek(): T | undefined {
        return this.head ? this.head.value : undefined;
    }

    // Check if the stack is empty
    isEmpty(): boolean {
        return this.length === 0;
    }

    // Get the size of the stack
    size(): number {
        return this.length;
    }
}

// Example usage of LinkedListStack
const stack = new LinkedListStack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // Output: 3
console.log(stack.peek()); // Output: 2
console.log(stack.isEmpty()); // Output: false
console.log(stack.size()); // Output: 2
console.log(stack.pop()); // Output: 2
console.log(stack.pop()); // Output: 1
console.log(stack.isEmpty()); // Output: true