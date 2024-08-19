
class CLNode<T> {
    data: T;
    next?: CLNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

class CircularLinkedList<T> {
    private head?: CLNode<T>;

    // Add a new element at the specified position or at the end if no position is provided
    add(data: T, position?: number): void {
        if (position === undefined) {
            this.insertAtEnd(data);
            return;
        }
        if (position < 1) {
            console.log("Invalid position!");
            return;
        }
        if (position === 1) {
            this.insertAtBeginning(data);
            return;
        }
        this.insertAtPosition(data, position);
    }

    private insertAtBeginning(data: T): void {
        const newCLNode = new CLNode(data);

        if (!this.head) {
            this.head = newCLNode;
            newCLNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next!;
            }
            current.next = newCLNode;
            newCLNode.next = this.head;
            this.head = newCLNode;
        }
    }

    private insertAtEnd(data: T): void {
        const newCLNode = new CLNode(data);

        if (!this.head) {
            this.head = newCLNode;
            newCLNode.next = this.head;
        } else {
            let current = this.head;
            while (current.next !== this.head) {
                current = current.next!;
            }
            current.next = newCLNode;
            newCLNode.next = this.head;
        }
    }

    private insertAtPosition(data: T, position: number): void {
        const newCLNode = new CLNode(data);
        let current = this.head;
        let previous: CLNode<T> | undefined;

        for (let i = 1; i < position && current; i++) {
            previous = current;
            current = current.next;
        }

        if (previous) {
            newCLNode.next = previous.next;
            previous.next = newCLNode;
        }
    }

    // Delete an element by its data
    delete(data: T): void {
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

        let current = this.head;
        let previous: CLNode<T> | undefined;

        do {
            if (current.data === data) {
                if (previous) {
                    previous.next = current.next;
                }
                return;
            }
            previous = current;
            current = current.next!;
        } while (current !== this.head);

        console.log(`${data} not found!`);
    }

    // Display the list
    print(): void {
        if (!this.head) {
            console.log([]);
            return;
        }

        let current = this.head;
        const result: T[] = [];

        do {
            result.push(current.data);
            current = current.next!;
        } while (current !== this.head);

        console.log(result);
    }
}

// Test the CircularLinkedList
const cll = new CircularLinkedList<number>();

cll.add(1);
cll.add(2);
cll.add(4);
cll.add(5);
cll.add(3, 3);

console.log("Initial list:");
cll.print();

// Deleting a non-existent value
cll.delete(0);
cll.print();

// Deleting the head
cll.delete(1);
cll.print();

// Deleting the tail
cll.delete(5);
cll.print();

// Deleting from the middle
cll.delete(3);
cll.print();

// Deleting all elements one by one
cll.delete(2);
cll.print();

cll.delete(4);
cll.print();
