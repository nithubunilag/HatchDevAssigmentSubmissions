class Cnode<T>{
    data: T;
    next: Cnode<T>;
    prev: Cnode<T>;

    constructor(val: T ){
        this.data = val;
    }
}

class Cl<T>{
    head: Cnode<T>;
    tail: Cnode<T>;

    add(val: T){
        let newNode = new Cnode(val)

        // if we don't have "head"
        if (!this.head){
            this.head =  newNode;
            this.tail = newNode;
            newNode.next = this.head;
            newNode.prev = this.tail
            return;
        } else{                   // if we have an head
            newNode.next = this.head ;
            this.head.next = newNode;
            this.tail.prev = newNode
            this.head = newNode;

            // newNode.next = this.head;

        }

        // if we have "head"
                   
    }

    // insert at index
    insertAt(val: T, position: number){
        let newNode = new Cnode(val)
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

}

const clic = new Cl();
clic.add(1);
clic.add(2);
clic.add(3);
clic.insertAt(200, 2);
// lic.removeAt(2);

console.log(clic);

// complete the doublelinked list
// do a circular linked list
// and add a shuffle methodin the circular and double
