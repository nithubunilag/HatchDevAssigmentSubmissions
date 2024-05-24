class CircularNode<T> {
    value: T;
    next?: CircularNode<T>; // Make next an optional property

    constructor(value: T, next?: CircularNode<T>) {
        this.value = value;
        this.next = next; // Initialize next in the constructor
    }
}

class CircularLinkedList<T> {
    head?: CircularNode<T>; // Make head an optional property

    insert(value: T) {
        const newNode = new CircularNode(value);

        // If there is no head
        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head; // Point the next of the new node to itself
        } else {
            let currentNode = this.head;
            // Traverse to the last node
            while (currentNode.next !== this.head) {
                currentNode = currentNode.next!;
            }
            // Link the last node to the new node
            currentNode.next = newNode;
            // Link the new node back to the head to make it circular
            newNode.next = this.head;
        }
    }

    display() {
        // Print each node until we reach the head again
        let currentNode = this.head;
        let result = '';
        if (currentNode) {
            do {
                result += `${currentNode.value} => `;
                currentNode = currentNode.next!;
            } while (currentNode !== this.head);
        }
        return result + this.head?.value; 
    }
}

const circularList = new CircularLinkedList<number>();
circularList.insert(1);
circularList.insert(43);
circularList.insert(23);
circularList.insert(90);
console.log(circularList.display());
