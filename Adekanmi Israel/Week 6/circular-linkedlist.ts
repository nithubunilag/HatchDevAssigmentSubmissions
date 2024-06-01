class CircularLinkedListNode<T> {
    data: T;
    next?: CircularLinkedListNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

class CircularLinkedList<T> {
    head?: CircularLinkedListNode<T>;

    add(data: T, position?: number) {
        if (position === undefined || position === this.size() + 1) {
            this.insertAtEnd(data);
        } else if (position < 1) {
            console.log("Invalid position!");
        } else if (position === 1) {
            this.insertAtBeginning(data);
        } else {
            this.insertAtPosition(data, position);
        }
    }

    private insertAtBeginning(data: T) {
        const newNode = new CircularLinkedListNode<T>(data);

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        let current = this.head;
        while (current.next !== this.head) {
            current = current.next!;
        }
        current.next = newNode;
        newNode.next = this.head;
        this.head = newNode;
    }

    private insertAtEnd(data: T) {
        const newNode = new CircularLinkedListNode(data);

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
            return;
        }

        let current = this.head;
        while (current.next !== this.head) {
            current = current.next!;
        }
        current.next = newNode;
        newNode.next = this.head;
    }

    private insertAtPosition(data: T, position: number) {
        const newNode = new CircularLinkedListNode(data);
        let currentPosition = 1;
        let currentNode = this.head!;

        while (currentNode.next !== this.head && currentPosition < position - 1) {
            currentNode = currentNode.next!;
            currentPosition++;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    delete(data: T) {
        if (!this.head) {
            console.log("List is empty!");
            return;
        }

        if (this.head.data === data) {
            if (this.head.next === this.head) {
                this.head = undefined;
            } else {
                let current = this.head;
                while (current.next !== this.head) {
                    current = current.next!;
                }
                current.next = this.head.next;
                this.head = this.head.next;
            }
            return;
        }

        let current = this.head!;
        let previous: CircularLinkedListNode<T> | undefined;

        while (current.next !== this.head) {
            if (current.data === data) {
                if (previous) previous.next = current.next;
                return;
            }
            previous = current;
            current = current.next!;
        }

        if (current.data === data && previous) {
            previous.next = current.next;
        } else {
            console.log(data, "not found!");
        }
    }

    print() {
        if (!this.head) {
            console.log([]);
            return;
        }

        const result: T[] = [];
        let currentNode = this.head;

        do {
            result.push(currentNode.data);
            currentNode = currentNode.next!;
        } while (currentNode !== this.head);

        console.log(result);
    }

    size(): number {
        if (!this.head) return 0;
        let count = 1;
        let currentNode = this.head.next;
        while (currentNode !== this.head) {
            count++;
            currentNode = currentNode?.next!;
        }
        return count;
    }
}

// Test
const circularLinkedList = new CircularLinkedList<number>();
circularLinkedList.add(10);
circularLinkedList.add(20);
circularLinkedList.add(40);
circularLinkedList.add(50);
circularLinkedList.add(30, 3);

circularLinkedList.print(); 

// Deleting a non-existent value
circularLinkedList.delete(0);
circularLinkedList.print();

// Deleting the head
circularLinkedList.delete(10);
circularLinkedList.print(); 

// Deleting the tail
circularLinkedList.delete(50);
circularLinkedList.print();

// Deleting from the middle
circularLinkedList.delete(30);
circularLinkedList.print(); 

circularLinkedList.delete(20);
circularLinkedList.print();

// Deleting the only node
circularLinkedList.delete(40);
circularLinkedList.print();
