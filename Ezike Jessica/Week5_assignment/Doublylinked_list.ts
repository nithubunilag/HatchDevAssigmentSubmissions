////////////////////////////////////////////////////////////////////////////
// NAME :>      EZIKE JESSICA
//EMAIL :>      jessicaezike.je@gmail.com

//////////////Doublylinked list
class node<T> {
    prev: node<T>  | null = null;  ///This points to the previouse address
    data: T
    next: node<T> | null = null;   /// this is just the nextAddress which has a type of the class node<T> which also has a data and a nextAddress
    
    constructor(val: T) {
        this.data = val;
    }
}


class DoublylinkedList<T> {
    head: node<T> | null = null;

    add(val: T, position?: number) {
        const newNode = new node(val)
        
        //if we dont have 'head'
        if (!this.head) {
            this.head = newNode
            return;
        }    

        // if we have 'head'
        //addding to the end if position is not specified
        if(position === undefined) {
            let currentNode = this.head
        
            while( currentNode.next != undefined) {
                currentNode = currentNode.next
            }

            currentNode.next = newNode
            newNode.prev = currentNode
            return
        }

        // adding to the head
        if (position === 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
            return
        }

        //adding to a specified location
        let currentNode = this.head;
        let currentIndex = 0;

        while (currentNode.next && currentIndex < position - 1) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        // Insert the new node
        newNode.next = currentNode.next;
        if (currentNode.next) {
            currentNode.next.prev = newNode;
        }
        currentNode.next = newNode;
        newNode.prev = currentNode;
        
    }

    delete(position: number) {
        // if the list is empty
        if (!this.head) {
            console.log('The List is empty');
            return;
        }

        // if deleting the head node
        if (position === 0) {
            if (this.head.next) {
                this.head = this.head.next;
                this.head.prev = null;
            } else {
                this.head = null; // List uis now empty
            }
            return;
        }

        // Deleting at a specified position
        let currentNode = this.head;
        let currentIndex = 0;

        // looping the list to find the position
        while (currentNode.next && currentIndex < position) {
            currentNode = currentNode.next;
            currentIndex++;
        }

        // If position is out of bounds
        if (currentIndex < position) {
            console.log('Error in Position');
            return;
        }

        // deleting the node
        if (currentNode.next) {
            currentNode.next.prev = currentNode.prev;
        }
        if (currentNode.prev) {
            currentNode.prev.next = currentNode.next;
        }
    }
}


const test = new DoublylinkedList<number>()
test.add(1)
test.add(2)
test.add(3)
test.add(4)
console.log(test) // to give 1 2 3 4

test.add(5) // 1, 2, 3, 4, 5
test.add(8, 0) // 8, 1, 2, 3, 4, 5
console.log(test)

test.add(9,4) // 8, 1, 2, 3, 9, 4, 5
console.log(test)

test.delete(0)
test.delete(3) // 1, 2, 3, 4, 5
console.log(test)