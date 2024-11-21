class doublyLinkedlistNode<T> {
    data: T;
    prev: doublyLinkedlistNode<T> | null;
    next: doublyLinkedlistNode<T> | null;

    constructor(val: T) {
        this.data = val;
        this.prev = null;
        this.next = null;
    }
}

class DoublyLinkedList<T> {
    head: doublyLinkedlistNode<T> | null;

    constructor() {
        this.head = null;
    }

    add(val: T, position?: number) {
        const newNode = new doublyLinkedlistNode(val);

        // If we don't have head
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // If position is not specified or position is 0, insert at the beginning
        if (position === undefined || position <= 0) {
            newNode.next = this.head;
            if (this.head) {
                this.head.prev = newNode;
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
            currentNode.next.prev = newNode;
        }
        currentNode.next = newNode;
        newNode.prev = currentNode;
    }
    
    print() {
        let arr: T[] = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }

        return arr;
    }
    delete(position: number) {
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
        if (currentNode.prev) {
            currentNode.prev.next = currentNode.next;
        } else {
            // If currentNode is the head node
            this.head = currentNode.next;
        }

        if (currentNode.next) {
            currentNode.next.prev = currentNode.prev;
        }
    }

}

// Creating instance
let doublelinkls = new DoublyLinkedList<number>();
doublelinkls.add(1);
doublelinkls.add(2);
doublelinkls.add(4, 1); // Add 4 at position 1
doublelinkls.add(64, 0);
doublelinkls.delete(0); // delete at position 1

console.log(doublelinkls.print()); 
