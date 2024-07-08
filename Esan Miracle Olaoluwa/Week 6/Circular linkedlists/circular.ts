class clNode<T> {
    data: T;
    next?: clNode<T>;

    constructor(val: T, next?: clNode<T>) {
        this.data = val;
        this.next = next;
    }
}

class CLinkedList<T> {
    head?: clNode<T>;

    add(val: T) {
        const newNode = new clNode(val);

        if (!this.head) {
            this.head = newNode;
            newNode.next = this.head;
        } else {
            let currentNode = this.head;
            while (currentNode.next !== this.head) {
                currentNode = currentNode.next!;
            }
            currentNode.next = newNode;
            newNode.next = this.head;
        }
    }

    delete(val: T) {
        if (!this.head) {
            return; // List is empty, nothing to delete
        }

        let currentNode = this.head;
        let prevNode: clNode<T> | undefined = undefined;

        // For a case where the head needs to be deleted
        if (currentNode.data === val) {
            if (currentNode.next === this.head) {
                // Only one node in the list
                this.head = undefined;
            } else {
                // More than one node in the list
                while (currentNode.next !== this.head) {
                    currentNode = currentNode.next!;
                }
                // currentNode is now the last node in the list
                currentNode.next = this.head.next;
                this.head = this.head.next;
            }
            return;
        }

        prevNode = this.head;
        currentNode = this.head.next!;

        // Traverse the list to find the node to delete
        while (currentNode !== this.head) {
            if (currentNode.data === val) {
                prevNode!.next = currentNode.next;
                return;
            }
            prevNode = currentNode;
            currentNode = currentNode.next!;
        }
    }

    print() {
        let currentNode = this.head;
        let result = '';
        if (currentNode) {
            do {
                result += `${currentNode.data} => `;
                currentNode = currentNode.next!;
            } while (currentNode !== this.head);
        }
        return result + (this.head ? this.head.data : ''); 
    }
}

const circularLinkedList = new CLinkedList<number>();
circularLinkedList.add(1);
circularLinkedList.add(9);
circularLinkedList.add(13);
circularLinkedList.add(6);
console.log(circularLinkedList.print()); 

circularLinkedList.delete(9);
console.log(circularLinkedList.print()); 

circularLinkedList.delete(1);
console.log(circularLinkedList.print());

circularLinkedList.delete(6);
console.log(circularLinkedList.print()); 

