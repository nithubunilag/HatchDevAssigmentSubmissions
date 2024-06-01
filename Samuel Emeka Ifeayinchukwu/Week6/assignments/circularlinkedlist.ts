import { DoubleLinkedList, DLNode } from "../classworks/doublylinkedlist.ts";

class CircularDLinkedList<T> extends DoubleLinkedList<T> {
    constructor(){
        super()
    }
    add(data: T, index?: number): void {
        const newNode = new DLNode(data);

        if(index){

            // empty list or adding to the beginning
            if (this.head == null || index === 0) {
                newNode.next = this.head;
                if (this.head) {
                this.head.prev = newNode;
                }
                this.head = newNode;
                return;
            }

            // Adding to the end
            if (index === -1) {
                if (!this.head) {
                this.head = newNode;
                return;
                }
                let currentNode = this.head;
                while (currentNode.next) {
                    currentNode = currentNode.next;
                }
                currentNode.next = newNode;
                newNode.prev = currentNode;
                newNode.next = this.head
                return;
            }

            // Adding in between the linked list
            let currentNode = this.head;
            let currentIndex = 0;
            while (currentNode.next && currentIndex < index -1) {
                currentNode = currentNode.next;
                currentIndex++;
            }
            
            if(currentNode.next){
                newNode.next = currentNode.next;
                currentNode.next.prev = newNode;
                currentNode.next = newNode;
                newNode.prev = currentNode;
                return;
            }

        }

        if (!this.head) {
            this.head = newNode;
        } else {
            let currentNode = this.head;
            while (currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = newNode;
            newNode.prev = currentNode
            newNode.next = this.head
        }
    
      }
    
    delete(index: number) {
      // If the list is empty
      if (!this.head) {
        return false;
      }

      // If the list is not empty
      let currentNode = this.head;
      let deleteIndex = 0;
      do {
        if (deleteIndex === index) {
          break;
        }
        currentNode = currentNode.next!; 
        deleteIndex++;
      } while (currentNode !== this.head);

      // If the node to be deleted is the head
      if (currentNode === currentNode.next) {
        this.head = null;
        return true;
      }

      // delete action
      currentNode.prev!.next = currentNode.next;
      currentNode.next!.prev = currentNode.prev;
  
      // Update head if the deleted node was the head
      if (currentNode === this.head) {
        this.head = currentNode.next;
      }
      return true;
    }
    
    shuffle(): void {
      console.log("Shuffling is not allowed")
    }

}

const cdll = new CircularDLinkedList()
cdll.add(1)
cdll.add(2)
cdll.add(3)
cdll.add(4)
// cdll.delete(2)

