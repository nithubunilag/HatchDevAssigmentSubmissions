class CLNode<T> {
    data: T;
    next?: CLNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

class CircularLinkedList<T> {
    head?: CLNode<T>;

    add(data: T, position?: number) {
        if (position === undefined) {
            this.insert_at_end(data);
            return;
        }
        if (position < 1) {
            console.log("Invalid position!");
            return;
        }
        if (position === 1) {
            this.insert_at_beginning(data);
            return;
        }
        this.insert_at_position(data, position);
    }

    private insert_at_beginning(data: T) {
        const new_node = new CLNode<T>(data);

        if (!this.head) {
            this.head = new_node;
            new_node.next = this.head;
            return;
        }

        let curr = this.head;
        while (curr.next !== this.head) {
            curr = curr.next!;
        }
        curr.next = new_node;
        new_node.next = this.head;
        this.head = new_node;
    }

    private insert_at_end(data: T) {
        const new_node = new CLNode(data);

        if (!this.head) {
            this.head = new_node;
            new_node.next = this.head;
            return;
        }

        let curr = this.head;
        while (curr.next !== this.head) {
            curr = curr.next!;
        }
        curr.next = new_node;
        new_node.next = this.head;
    }

    private insert_at_position(data: T, position: number) {
        const newNode = new CLNode(data);

        let currentPosition = 1;
        let currentNode = this.head!;
        while (currentNode.next) {
            if (position && currentPosition === position - 1) break;
            currentNode = currentNode.next;
            currentPosition++;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    delete(data: T) {
        console.log("Deleting", data);
        if (!this.head) {
            console.log("List is empty!");
            return;
        }

        // If we're deleting the first element
        if (this.head.data === data) {
            if (this.head.next === this.head) {
                this.head = undefined;
            } else {
                let curr = this.head;
                while (curr.next !== this.head) {
                    curr = curr.next!;
                }
                curr.next = this.head.next;
                this.head = this.head.next;
            }
            return;
        }

        let curr = this.head!;
        let prev: CLNode<T>;
        while (curr!.next !== this.head) {
            if (curr.data === data) {
                prev!.next = curr!.next;
                return;
            }
            prev = curr;
            curr = curr.next!;
        }

        if (curr.data === data) {
            prev!.next = curr.next;
        } else {
            console.log(data, "not found!");
        }
    }

    print() {
        if (!this.head) {
            console.log([]);
            return;
        }

        let currentNode: CLNode<T> = this.head.next!;
        const arr: T[] = [this.head.data];
        while (currentNode !== this.head) {
            arr.push(currentNode.data);
            currentNode = currentNode.next!;
        }

        console.log(arr);
    }
}

// Test
const cll = new CircularLinkedList<number>();
cll.add(1);
cll.add(2);
cll.add(4);
cll.add(5);
cll.add(3, 3);

cll.print();

/* // Deleting a non-existent value
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

cll.delete(2);
cll.print();

// Deleting the only node
cll.delete(4);
cll.print(); */