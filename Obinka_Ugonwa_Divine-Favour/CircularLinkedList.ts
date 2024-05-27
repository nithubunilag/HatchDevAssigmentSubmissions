// Name: Obinka Ugonwa Divine-Favour
// email: divneobk@gmail.com

class CLNode<T>{
    data: T 
    next: CLNode<T>
    

    constructor(val: T){
        this.data = val
    }

}

class CircularLinkedList<T>{
    head: CLNode<T>
    
    // adding to the end of a linked list
    add(newValue: T, position?: number){
        const newNode = new CLNode(newValue)
        if(!this.head){
            this.head = newNode
            this.head.next = this.head      // it should point back to the head
            return;
        }
        if(position == 1){
            this.addAtBeginning(newValue)
            return;
        }
        if(position! > 1){          //why's the addAtPosition and end not working????????????
            this.addAtPosition(newValue, position!)
            return
        }
        if(!position){
            this.addAtEnd(newValue)
            return
        }

    }

    // adds at the beginning of the list
    private addAtBeginning(val: T, position: number = 1){
        const newNode = new CLNode(val)
        
        newNode.next = this.head  
        this.head = newNode
    }

    // adds at the tail in the list
    private addAtEnd(val: T){
        const newNode = new CLNode(val)

        let currNode = this.head
        while(currNode.next !== this.head){     // while we've not gotten to the head keep traversing
            currNode = currNode.next 
        }
        currNode.next = newNode  // adds the new node after the last node
        newNode.next =  this.head // points the new node back to the head
    }

    // adding to a position in the linked list
    private addAtPosition(val: T, position: number){
        const newNode = new CLNode(val)
        let index: number = 1
        let currNode = this.head
        while(currNode.next !== this.head){
            if(position === index + 1){
                let nextNode =  currNode.next   // ope oooo

                currNode.next = newNode 
                newNode.next =  nextNode
            }
            currNode = currNode.next
            index++

        }
    }

    // delete a value from the linked list
    delete(val: T){
        let nodeToDelete = new CLNode(val)

        if (this.head.data == nodeToDelete.data){
            this.head = this.head.next
            return;
        }

        let currentNode = this.head

        while(currentNode.data !== nodeToDelete.data){
            currentNode = currentNode.next
        }
        currentNode.next = currentNode    // this assigns the prev node to the prevpointer of the next node
        
    }

    // shuffle method
    // Convert the Linked List to an Array
    // Shuffle the Array
    // Reconstruct the Linked List from the Shuffled Array
    shuffle(){

    }
}

//implementation
const cll = new CircularLinkedList()

cll.add(1)
cll.add(2)
cll.add(3)
cll.delete(3)
cll.add(23,1)
cll.add(90, 3)

console.log(cll)