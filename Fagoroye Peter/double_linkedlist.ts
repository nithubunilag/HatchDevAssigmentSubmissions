class Dnode<T>{
    data: T;
    next: Dnode<T>;
    prev: Dnode<T>;

    constructor(val: T ){
        this.data = val;
    }
}

class Ll<T>{
    head: Dnode<T>;
    tail: Dnode<T>;

    add(val: T){
        let newNode = new Dnode(val)

        // if we don't have "head"
        if (!this.head){
            this.head =  newNode;
            this.tail = newNode;
            return;
        } else{                   // if we have an head
            newNode.next = this.head ;
            this.head.prev = newNode;
            this.head = newNode;

        }
                   
    }

    // insert at position
    insertAt(val: T, position){
        let newNode = new Dnode(val)
        // if a user trys to put it at the head
        let currentNode, prevNode;
        currentNode = this.head;
        if(position === 0){
            this.head = newNode;
            this.tail = newNode;
            return;
        } else{
            prevNode = currentNode; // node before the position
            currentNode = currentNode.next // node after the position
        }

        newNode.next = currentNode;
        prevNode.next = newNode;

        
    }

    removeAt(position: number){
        let currentNode = this.head;
        let previous;
        let count = 0;

        if(position === 0){
            this.head = currentNode.next;
            this.tail = currentNode.next;
        }else{
            while(count < position){
                count++;
                previous = currentNode;
                currentNode = currentNode.next;
            }

            previous.next = currentNode.next;
            this.head =  previous;
        }

    }
}

const lic = new Ll();
lic.add(1);
lic.add(2);
lic.add(3);
lic.insertAt(200, 1);
lic.removeAt(2);

console.log(lic);

// complete the doublelinked list
// do a circular linked list
// and add a shuffle methodin the circular and double
