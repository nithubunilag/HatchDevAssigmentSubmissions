class CSLNode<T>{
    data: T| null;
    next: CSLNode<T>;
    

    constructor(val:T){
        this.data = val;
    }
}

class CircularSinglyLinkedList<T>{
    head: CSLNode<T> | null;

    add(val : T, position?: number){
        let newNode = new CSLNode<T>(val);

        //IF LIST IS EMPTY-  NO HEAD
        if(!this.head){
            this.head = newNode;
            newNode.next = newNode;
            return;
        }

        if(position === undefined){
            this.append(newNode);
            return;
        }

        if(position === 0){
            this.prepend(newNode);
            return;
        }

        this.insert(newNode, position);
    }

    //ADD TO THE TAIL
    private append(newNode : CSLNode<T>){
        if(!this.head){ //If there's no head, let the new node to be the head
            this.head = newNode;
            newNode.next = newNode; //New node point to itself since its the head and the tail(only one element) abd tail points to head so newNode's next node is itself
            return;
        }

        let currentNode = this.head;
        while(currentNode.next !== this.head){
            currentNode = currentNode.next;
        }

        currentNode.next = newNode;
        newNode.next = this.head;
    }

    private prepend(newNode : CSLNode<T>){
        if(!this.head){ //IF LIST IS EMPTY
            this.head = newNode;
            newNode.next = newNode;
            return;
        }
        else{ //IF LIST IS NOT EMPTY

            //TRAVERSE THE LIST TILL YOU GET TO THE TAIL - which points back to head here and not null
            let currentNode = this.head;
            while(currentNode.next !== this.head){
                currentNode = currentNode.next
            }

            //CHANGE THE TAIL POINTER TO  POINT TO  THE NEW HEAD WE WANT TO PREPEND
            newNode.next = this.head
            currentNode.next = newNode;
            this.head = newNode;

        }

    }

    private insert(newNode, position){
        if(!this.head){
            throw new Error("You can't insert into an empty list");
        }

        if(position < 0){
            throw new Error("Position must be a positive integer");
        }
        

        let positionFromInsertionPoint = position;
        let currentNode:CSLNode<T> | null = this.head;

        //TRAVERSE THE LIST TO GET INSERTION POINT
        while(positionFromInsertionPoint > 1 && currentNode.next !== this.head){
            currentNode = currentNode?.next;
            positionFromInsertionPoint--;
        }

        if(currentNode.next == this.head){
            throw new Error("Index is out of bounds");
        }

        newNode.next = currentNode.next;
        currentNode.next = newNode;
    }

    delete(val:T){
        if(!this.head){
            throw new Error("You can't delete from am empty list");
        }

        //If the val is the head node
        if(this.head.data === val){
            if(this.head.next === this.head) { //there is only one node in our list
                this.head = null;
                return;
            }

            //Traverse the list to reach the last element so that you can change the tail pointer  to point to the 2nd value after head
            let currentNode = this.head;
            while(currentNode.next !== this.head){
                currentNode = currentNode.next;
            }
            currentNode.next = this.head.next;
            this.head = this.head.next;
            return;
        }
        
            let currentNode : CSLNode<T> | null = this.head;
            let previousNode : CSLNode<T> | null = null;

            do{
                if(currentNode.data === val){
                    if(previousNode !== null){ //If there is a previous node, then the current node is notthe head
                        previousNode.next = currentNode.next;
                    }
                    else{
                        this.head = currentNode.next;
                    }
                    return;
                    
                }

                previousNode = currentNode;
                currentNode = currentNode?.next
            }
            while(currentNode !== this.head);
        
        

        console.log("Value not found");

    }
}

const myCSLList = new CircularSinglyLinkedList();
myCSLList.add(1, 0);
myCSLList.add(2);
myCSLList.add(3);
myCSLList.add(4, 2);
myCSLList.delete(2);
console.log(myCSLList);