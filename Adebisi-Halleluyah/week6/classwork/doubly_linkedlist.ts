class DLNode<T> {
    data: T;
    next: DLNode<T> | null;
    prev: DLNode<T> | null;

    constructor(data: T) {
        this.data = data;
    }
}

class DoubleLinkedList<T> {
    head: DLNode<T> | null;

    constructor(){
        this.head = null
    }

    add(data: T, position: number = -1): void {
        const newNode = new DLNode(data);
    
        if (position < 0) {
          position = -1; // Default to adding at the end for negative positions
        }
    
        if (this.head == null) {
          // List is empty, new node becomes the head
          this.head = newNode;
          return;
        }
    
        if (position === 0) {
          // Add to head
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
          return;
        }
    
        let currentNode = this.head;
        let count = 0;
    
        while (currentNode.next && count < position) {
          currentNode = currentNode.next;
          count++;
        }
    
        if (count === position) {
          // Insert in the middle or at the end (depending on if currentNode.next exists)
          newNode.next = currentNode.next;
          if (currentNode.next) {
            currentNode.next.prev = newNode;
          }
          currentNode.next = newNode;
          newNode.prev = currentNode;
        } else {
          // Position exceeds list size, add to the end
          currentNode.next = newNode;
          newNode.prev = currentNode;
        }
      }

   /*  add(data: T){
        const node = new DLNode(data)
        if(this.head == null) {
            this.head = node
        } else {
            let currentNode = this.head;
            while(currentNode.next){
                currentNode = currentNode.next
            }
            currentNode.next = node;
            node.prev = currentNode
        }
    } */

    delete(index: number){
        if(this.head == null) {
            return false
        } else {
            let deleteIndex = 0;
            let currentNode = this.head
            while(deleteIndex < index && currentNode.next){
                currentNode = currentNode.next
                deleteIndex++
            }
            if(currentNode.prev !== null){
                currentNode.prev.next = currentNode.next
            }
        }
    }

    print(){
        const data: Array<T> = []
        let currentNode = this.head;
        while(currentNode){
            data.push(currentNode.data)
            currentNode = currentNode.next
        }
        console.log(data)
    }
}

const dll = new DoubleLinkedList()
dll.add(1)
dll.add(2)
dll.add(3)
dll.add(4, 0)
dll.print()


