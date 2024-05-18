////////////////////////////////////////////////////////////////////////////
//////////////Doublylinked list
class node<T> {
    prev: node<T> | null = null  ///This points to the previouse address
    data: T
    next: node<T> | null = null   /// this is just the nextAddress which has a type of the class node<T> which also has a data and a nextAddress
    
    constructor(val: T) {
        this.data = val;
    }
}


class DoublylinkedList<T> {
    head: node<T>
    tail: node<T>

    add(val: T) {
        const newNode = new node(val)
        
        //if we dont have 'head'
        if (!this.head) {
            this.head = newNode
            return;
        }    

        // if we have 'head'
        let currentNode = this.head
        
        while( currentNode.next != undefined) {
            currentNode = currentNode.next

        }

        currentNode.next = newNode
        newNode.prev = currentNode
        
    }

    addToPosition(val: T, position: number) {
        const newNode = new node(val);

        // If the list is empty
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return;
        }

        // If the position is 0, insert at the head
        if (position === 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            return;
        }

        // Inserting at a specific position
        let current = this.head;
        let index = 0;

        while (current !== null && index < position) {
            current = current.next;
            index++;
        }

        // If we're at the end, update the tail
        if (current === null) {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
            return;
        }

        // Insert in the middle
        newNode.next = current;
        newNode.prev = current.prev;
        if (current.prev) {
            current.prev.next = newNode;
        }
        current.prev = newNode;
    }
}


const test = new DoublylinkedList<number>()
test.addToPosition(1, 0)
test.addToPosition(2, 1)
test.addToPosition(3, 2)
test.addToPosition(4, 3)
test.addToPosition(5, 4)
console.log(test)