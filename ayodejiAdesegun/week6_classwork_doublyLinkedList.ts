class DLNode<T>{
    data: T;
    next: DLNode<T>;
    prev: DLNode<T>;
    constructor(val:T){
        this.data = val;
    }
}

class DoublyLinkedList<T>{
    head: DLNode<T>;
    add(val:T, position?:number){
        // Adding to the beginning
        const newNode = new DLNode(val);
        if(!this.head){
            this.head = newNode;
            return;
        }
        // Adding to the end 
        if(this.head){
            let currentNode = this.head;
            while(currentNode.next != undefined){
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.prev = currentNode;
        }
        // Adding to a specific position
        
    }
    
    delete(val:T){
        
    }
}
let doubleList = new DoublyLinkedList();
doubleList.add(1);
doubleList.add(2);
doubleList.add(3);
doubleList.add(4);
console.log(doubleList);
