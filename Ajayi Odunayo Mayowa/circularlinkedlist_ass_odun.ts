class clNode<T> {
    data: T;
    next?: clNode<T>; // Make next an optional property

    constructor(val: T, next?: clNode<T>) {
        this.data = val;
        this.next = next; // Initialize next in the constructor
    }
}

class CLinkedList<T> {
    head?: clNode<T>; // Make head an optional property

    add(val: T) {
        const newNode = new clNode(val);

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

    print() {
        // Print each node until we reach the head again
        let currentNode = this.head;
        let result = '';
        if (currentNode) {
            do {
                result += `${currentNode.data} => `;
                currentNode = currentNode.next!;
            } while (currentNode !== this.head);
        }
        return result + this.head?.data; 
    }
}

const circular_linkedList = new CLinkedList<number>();
circular_linkedList.add(1);
circular_linkedList.add(43);
circular_linkedList.add(23);
circular_linkedList.add(90)
console.log(circular_linkedList.print());
