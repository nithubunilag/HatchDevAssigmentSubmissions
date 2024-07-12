class LNode<T> {
    data: T;
    next?: LNode<T>;

    constructor(data: T) {
        this.data = data;
    }
}

class LinkedList<T> {
    head?: LNode<T>;

    /**
     * Adds a value to the linked list. Appends if position is more than list size.
     * 
     * @param data - The value to insert into the linked listt
     * @param position - Optional. The position to add into (starts from 1)
     */
    add(data: T, position?: number) {
        const newNode = new LNode(data);

        // if we have a head node
        if (!this.head) {
            this.head = newNode;
            return;
        }

        // if position is 1, insert as head
        if (position !== undefined && position <= 1) {
            newNode.next = this.head;
            this.head = newNode;
            return;
        }

        // if we don't have a head node
        let currentPosition = 1;
        let currentNode = this.head;
        while (currentNode.next) {
            if (position && currentPosition === position-1) break;
            currentNode = currentNode.next;
            currentPosition++;
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    print() {
        const arr: T[] = [];
        if (!this.head) {
            console.log([]);
            return;
        }

        let currentNode: LNode<T> | undefined = this.head;
        while (currentNode) {
            arr.push(currentNode.data);
            currentNode = currentNode.next;
        }

        console.log(arr);
    }

    delete(value: T) {
        if (!this.head) return;

        if (this.head.data === value) {
            this.head = this.head.next;
            console.log("Deleted", value);
            return;
        }

        let currentNode: LNode<T> | undefined = this.head;
        while (currentNode.next) {
            if (currentNode.next.data === value) {
                currentNode.next = currentNode.next.next;
                console.log("Deleted", value);
                return;
            }
            currentNode = currentNode.next;
        }

        console.log("Could not delete", value);
    }
}


// Test
const linkedList = new LinkedList<number>();
linkedList.add(1);
linkedList.add(2);
linkedList.add(4);
linkedList.add(5);
linkedList.add(3, 3);

linkedList.print();

// Deleting a non-existent value
linkedList.delete(0);
linkedList.print();

// Deleting the head
linkedList.delete(1);
linkedList.print();

// Deleting the tail
linkedList.delete(5);
linkedList.print();

// Deleting from the middle
linkedList.delete(3);
linkedList.print();

linkedList.delete(2);
linkedList.print();

// Deleting the only node
linkedList.delete(4);
linkedList.print();