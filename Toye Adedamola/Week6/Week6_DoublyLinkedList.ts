class DLNode<T>{
    data: T| null;
    next: DLNode<T> | null;
    previous: DLNode<T>  | null;

    constructor(val:T){
        this.data = val;
        this.next = null;
        this.previous = null;
    }
}

class DoublyLinkedList<T>{
    head: DLNode<T> | null;

    add(val:T, position?: number){

        //Prepend
        //Append
        //Inserting at a position
        //Add before the tail

        let newNode = new DLNode<T>(val);
        if(!this.head){
            this.head = newNode;
            return;
        }

        //If position is not specified, append to the linked list
        if(position === undefined){
            this.append(newNode);
            return;
        }

        //If position is 0, prepend
        if(position == 0){
            this.prepend(newNode);
            return;
        }

        this.insert(newNode, position);

        
    }

    
    private append(newNode: DLNode<T>){
       let currentNode = this.head;
       while(currentNode!.next !== null){
            currentNode = currentNode!.next;
       }
       currentNode!.next = newNode;
       newNode.previous = currentNode


    }

    private prepend(newNode: DLNode<T>){
        newNode.next = this.head;
        if(this.head !== null){
            this.head.previous = newNode
        }
        newNode.previous = null;
        this.head = newNode;
        
        
    }

    private insert(newNode: DLNode<T>, position: number){
        if(position < 0){
            throw new Error("Position must be a positive integer");
        }
        else{
            let positionFromInsertionPoint = position;
            let currentNode: DLNode<T> | null = this.head;

            while(positionFromInsertionPoint > 1 && currentNode !== null){
                currentNode = currentNode?.next;
                positionFromInsertionPoint--
            }

            
            if(currentNode == null){
                throw new Error("Position is out of bounds");
            }
            

            if(currentNode.next !== null){
                newNode.next = currentNode.next;
                newNode.previous = currentNode;
                currentNode.next.previous = newNode;
            }

            
        }
        
    }
  


    //Adding head and  tail as a property? in ???

    delete(val:T){
        if(!this.head){
            throw new Error("You cannot delete from an empty list");
            return;
        }

        //The the head is the value we are looking for
        if(this.head.data === val){
            this.head = this.head.next;
            if(this.head !== null){
                this.head.previous = null;
            }
            return;
        }

        let currentNode: DLNode<T> | null = this.head;

        //Traverse the list to find the node to delete
        while(currentNode !== null){
            if(currentNode.data === val){
                if(currentNode.next !== null){
                    currentNode.next.previous = currentNode.previous;
                }

                if(currentNode.previous !== null){
                    currentNode.previous.next = currentNode.next;
                }
                return;
            }
            currentNode = currentNode.next;
        }
        console.log("Value not found");
    }
}


const myDoubleLinkedList = new DoublyLinkedList();
myDoubleLinkedList.add(1);
myDoubleLinkedList.add(2);
myDoubleLinkedList.add(4);
myDoubleLinkedList.add(5, 2);
console.log(myDoubleLinkedList)
myDoubleLinkedList.delete(1);
console.log(myDoubleLinkedList);







