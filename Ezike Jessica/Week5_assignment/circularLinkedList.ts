// NAME :>      EZIKE JESSICA
//EMAIL :>      jessicaezike.je@gmail.com

class node<T> {
    data: T;
    nextNode: node<T> 

    constructor(val: T) {
        this.data = val;
    }
}

class CircularLinkedList<T> {
    head: node<T> | null = null;

    add(val: T, position?: number) {
        const newNode = new node(val);

        //when there is no head
        if (!this.head) {
            this.head = newNode;
            newNode.nextNode = this.head;  // Point to itself
        } 
        

        //when there is head
        if (position === undefined) {
            
            // default addition at the end
            let current = this.head;
            while (current.nextNode !== this.head) {
                current = current.nextNode;
            }
            current.nextNode = newNode;
            newNode.nextNode = this.head;  // Point back to the head
        }

        else if (position === 0) { //newnode should be the head
            
            //adding to the front of the head
            newNode.nextNode = this.head
            let current = this.head
            while(current.nextNode !== this.head) {
                current = current.nextNode //trying to find the last node
            }
            current.nextNode = newNode
            this.head = newNode //update the head and shifts the pevious head
        }

        else {

            // adding at a specific position
            let current = this.head //starting from the head
            let previous: node<T> | null = null;
            let index = 0

            while(index < position) {
                previous = current
                current = current.nextNode //moving to the next node
                index++

                //if we are in the head position again maybe the position indicated is not in the list
                if(current === this.head) {
                    break;
                }
            }

            newNode.nextNode = current //new node is now pointing to the current position we are in
            if (previous) {
                previous.nextNode = newNode; //previous will now point to the new node hence fixing the new node in the indicated position
            }
        }
    }

    delete(position: number) {
        //empty list
        if (!this.head) {
            console.log("This List is empty");
            return;
        }
        //deleting from the head
        if (position === 0) {
            if (this.head.nextNode === this.head) {
                // Only one node in the list
                this.head = null;
            } else {
                let current = this.head;
                while (current.nextNode !== this.head) {
                    current = current.nextNode!;
                }
                current.nextNode = this.head.nextNode;
                this.head = this.head.nextNode;
            }
            return;
        }
        // Delete at specific position
        let current = this.head;
        let previous: node<T> | null = null;
        let index = 0;

        while (index < position) {
            previous = current;
            current = current.nextNode!;
            index++;
            if (current === this.head) {
                console.log("error in Position");
                return;
            }
        }

        if (previous && current !== this.head) {
            previous.nextNode = current.nextNode;
        }
    }
}



const circularList = new CircularLinkedList<number>();
circularList.add(1);
circularList.add(2);
console.log(circularList) // should give 1, 2

circularList.add(3, 1);
circularList.add(4,0);
console.log(circularList) //should give 4, 1, 3, 2

circularList.delete(0);
circularList.delete(2); 
circularList.delete(10);
console.log(circularList) //should give 1, 3
