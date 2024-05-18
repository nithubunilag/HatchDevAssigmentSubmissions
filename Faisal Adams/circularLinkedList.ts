class node<T> {
    data: T;
    nextNode: node<T> 

    constructor(val: T) {
        this.data = val;
    }
}

class FaisalCircularLinkedList<T> {
    head: node<T>

    add(val: T) {
        const newNode = new node(val);

        //when there is no head
        if (!this.head) {
            this.head = newNode;
            newNode.nextNode = this.head;  // Point to itself
            return;
        } 
        

        //when there is head
        let current = this.head;

        while (current.nextNode !== this.head) {
            // console.log(this.head)
            current = current.nextNode;
        }

        current.nextNode = newNode;
        newNode.nextNode = this.head;  // Point back to the head
    }


    addToPosition(val: T, position?: number){
        const newNode = new node(val);
        let index: number = 0;
        //when there is no head
        if (!this.head) {
            this.head = newNode;
            newNode.nextNode = this.head;  // Point to itself
            return;
        } 

        //when there is head
        if (position === 0) {
            newNode.nextNode = this.head;
            
            // Now that we have set the newNode to point to the head, we need to update the last node to point to the new head.Shey you get future Faisal?
            let current = this.head;
            while (current.nextNode !== this.head) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
            this.head = newNode;  
            return;
        }

        let current = this.head;
        let prev = null as node<T> | null;

        do {
            prev = current;
            current = current.nextNode!;
            index++;
        } while (index < position && current !== this.head);

        newNode.nextNode = current;
        if (prev) {
            prev.nextNode = newNode;
        }
    }
}




const circularList = new FaisalCircularLinkedList<number>();
circularList.addToPosition(1, 0);
circularList.addToPosition(2, 1);
circularList.addToPosition(3, 2);
circularList.addToPosition(4, 3);
console.log(circularList)
