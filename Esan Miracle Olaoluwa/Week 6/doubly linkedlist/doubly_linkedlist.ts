class DoublyLinkedListNode<T> {
    data: T;
    prev: DoublyLinkedListNode<T> | null;
    next: DoublyLinkedListNode<T> | null;

    constructor(val: T) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList<T> {
    head: DoublyLinkedListNode<T> | null;

    constructor() {
        this.head = null;
    }

    add(val: T, position?: number) {
        const newNode = new DoublyLinkedListNode(val);

        if (!this.head) {
            this.head = newNode;
            return;
        }

        if (position === undefined || position < 0) {
            position = this.length();
        }

        if (position === 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            let currentNode = this.head;
            let currentIndex = 0;

            while (currentIndex < position - 1 && currentNode.next) {
                currentNode = currentNode.next;
                currentIndex++;
            }

            newNode.next = currentNode.next;
            if (currentNode.next) {
                currentNode.next.prev = newNode;
            }
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
    }

    delete(position: number): void {
        if (this.head === null || position < 0) {
            return;
        }

        let currentNode: DoublyLinkedListNode<T> | null = this.head;

        if (position === 0) {
            this.head = this.head.next;
            if (this.head) {
                this.head.prev = null;
            }
            return;
        }

        let currentIndex = 0;
        while (currentNode !== null && currentIndex < position) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        if (currentNode === null) {
            return;
        }

        if (currentNode.prev) {
            currentNode.prev.next = currentNode.next;
        }

        if (currentNode.next) {
            currentNode.next.prev = currentNode.prev;
        }
    }

    length(): number {
        let count = 0;
        let currentNode: DoublyLinkedListNode<T> | null = this.head;
        while (currentNode) {
            count++;
            currentNode = currentNode.next;
        }
        return count;
    }

    print(): T[] {
        let arr: T[] = [];
        let currentNode: DoublyLinkedListNode<T> | null = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }
        return arr;
    }
}

// Creating instances and testing
let doublelinkls = new DoublyLinkedList<number>();
doublelinkls.add(2);
doublelinkls.add(3);
doublelinkls.add(4);
doublelinkls.add(5, 1);
doublelinkls.add(6, 3);

console.log(doublelinkls.print()); // Output: [2, 5, 3, 6, 4]

doublelinkls.delete(0);
console.log(doublelinkls.print()); // Output: [5, 3, 6, 4]

doublelinkls.delete(2);
console.log(doublelinkls.print()); // Output: [5, 3, 4]


console.log(doublelinkls.print()); // Output: [5, 3, 4]
