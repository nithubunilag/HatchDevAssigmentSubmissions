// circular linked list
// keep track of tail node instead of head node
class myNode<T> {
    data: T;
    next: myNode<T> | null;

    constructor(data: T, next: myNode<T> | null = null) {
        this.data = data;
        this.next = next;
    }
}

class CLinkedList<T> {
    public head: myNode<T> | null;
    public tail: myNode<T> | null;

    constructor() {
        this.tail = null;
        this.head = null; 
    }

    // Add a new node to the circular linked list
    add(data: T) {
        const newNode = new myNode(data);

        if (!this.tail) {
            // If the list is empty, make the new node the tail
            this.tail = newNode;
            newNode.next = this.head;
            return;
        } 
        else {
            // Insert the new node after the tail
            newNode.next = this.tail.next;
            this.tail.next = newNode;
            this.tail = newNode;
        }
    }

    // Delete a node from the circular linked list
    delete(data: T) {
        if (!this.tail) {
            return;
        }

        let curr = this.tail.next;
        let prev = this.tail;

        while (curr !== this.tail) {
            if (curr && curr.data === data) {
                prev!.next = curr.next;

                if (curr === this.tail!.next) {
                    this.tail!.next = curr.next;
                }

                if (curr === this.tail) {
                    this.tail = prev;
                }

                return;
            }

            prev = curr!;
            curr = curr!.next;
        }

        // Check if the tail node is the one to be removed
        if (curr && curr.data === data) {
            prev!.next = curr.next;
            this.tail = prev;
        }
    }
}
        if (!this.tail) {
            // If the list is empty, return
           
        }

        let curr = this.tail.next;
        let prev = this.tail;

        while (curr !== this.tail) {
            

                if (curr === this.tail.next) {
                    // If the node to be deleted is the head, update the tail
                    this.tail.next = curr.next;
                }

                if (curr === this.tail) {
                    // If the node to be deleted is the tail, update the tail
                    this.tail = prev;
                }

                
            }    
        
            prev = curr;
            curr = curr.next;
        

    

    // Shuffle the circular linked list
    // shuffle() {
    //     if (!this.tail) {
    //         // If the list is empty, return
    //         return;
    //     }

    //     let curr = this.tail.next;
    //     let count = 0;

    //     // Count the number of nodes in the list
    //     while (curr !== this.tail) {
    //         count++;
    //         curr = curr.next;
    //     }

    //     count++; // Include the tail node

    //     curr = this.tail.next;

    //     // Generate a random index between 0 and count-1
    //     const getRandomIndex = () => Math.floor(Math.random() * count);

    //     // Perform Fisher-Yates shuffle algorithm
    //     for (let i = count - 1; i > 0; i--) {
    //         const j = getRandomIndex();

    //         // Swap the data of curr node and node at random index
    //         let temp = curr.data;
    //         curr.data = curr;
    //         curr.data = temp;

    //         curr = curr.next;

    
        

// const clist = new CLinkedList(['a', 'b', 'c']);

// clist.add('d');
// console.log(clist);

// clist.delete('a');
// console.log(clist);