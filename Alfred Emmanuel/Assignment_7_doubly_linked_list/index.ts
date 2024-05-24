class DoubleNode<T> {
    value: T;
    previous: DoubleNode<T> | null;
    next: DoubleNode<T> | null;

    constructor(value: T) {
        this.value = value;
        this.previous = null;
        this.next = null;
    }
}

class DoubleLinkedList<T> {
    head: DoubleNode<T> | null;

    constructor() {
        this.head = null;
    }

    insert(value: T, position?: number) {
        const newNode = new DoubleNode(value);

        // If we don't have head
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // If position is not specified or position is 0, insert at the beginning
        if (position === undefined || position <= 0) {
            newNode.next = this.head;
            if (this.head) {
                this.head.previous = newNode;
            }
            this.head = newNode;
            return;
        }

        let currentNode = this.head;
        let currentPosition = 0;

        // Traverse to the position
        while (currentNode.next && currentPosition < position - 1) {
            currentNode = currentNode.next;
            currentPosition++;
        }

        // Insert the new node
        newNode.next = currentNode.next;
        if (currentNode.next) {
            currentNode.next.previous = newNode;
        }
        currentNode.next = newNode;
        newNode.previous = currentNode;
    }

    display() {
        let arr: T[] = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return arr;
    }

    remove(position: number) {
        if (!this.head || position < 0) {
            return;
        }

        let currentNode = this.head;
        let currentPosition = 0;

        // Traverse to the position
        while (currentNode && currentPosition < position) {
            currentNode = currentNode.next!;
            currentPosition++;
        }

        // If currentNode is null, position is out of bounds
        if (!currentNode) {
            return;
        }

        // Adjust pointers of adjacent nodes
        if (currentNode.previous) {
            currentNode.previous.next = currentNode.next;
        } else {
            // If currentNode is the head node
            this.head = currentNode.next;
        }

        if (currentNode.next) {
            currentNode.next.previous = currentNode.previous;
        }
    }
}

// Creating instance
let doubleList = new DoubleLinkedList<number>();
doubleList.insert(1);
doubleList.insert(2);
doubleList.insert(4, 1); // Add 4 at position 1
doubleList.insert(64, 0);
doubleList.remove(0); // Remove at position 0

console.log(doubleList.display());
