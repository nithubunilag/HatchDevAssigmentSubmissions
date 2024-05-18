import { DoubleLinkedList, DLNode } from "../classworks/doublylinkedlist.ts";

class CircularDLinkedList<T> extends DoubleLinkedList<T> {
    constructor(){
        super()
    }
    add(data: T, index: number = -1): void {
        const newNode = new DLNode(data);
    
        // Empty list or adding to the beginning
        if (!this.head) {
          this.head = newNode;
          newNode.next = newNode;
          newNode.prev = newNode;
          return;
        }
    
        // Handle adding to the end (default behavior)
        if (index === -1) {
          const lastNode = this.head.prev!; // Get the last node (we know it exists)
          newNode.next = this.head;
          this.head.prev = newNode;
          lastNode.next = newNode;
          newNode.prev = lastNode;
          return;
        }

        // Handle adding in the middle (positive index)
        let addIndex = 0;
        let currentNode = this.head;
        while (currentNode.next && addIndex < index - 1) {
            currentNode = currentNode.next;
            addIndex++;
        }
        if (!currentNode.next) {
            currentNode.next = newNode;
            newNode.prev = currentNode;
            return;
        }
        newNode.next = currentNode.next;
        currentNode.next.prev = newNode;
        newNode.prev = currentNode;
        currentNode.next = newNode;
    
      }
    
      delete(index: number) {
        if (!this.head) {
          return false;
        }
    
        let currentNode = this.head;
        let deleteIndex = 0;
    
        do {
          if (deleteIndex === index) {
            break;
          }
          currentNode = currentNode.next!; 
          deleteIndex++;
        } while (currentNode !== this.head);

        if (currentNode === currentNode.next) {
          this.head = null;
          return true;
        }
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
    
      print(): void {
        const data: Array<T> = [];
        let currentNode = this.head;
    
        if (!currentNode) {
          console.log("List is empty.");
          return;
        }
        do {
          data.push(currentNode.data);
          currentNode = currentNode.next!;
        } while (currentNode !== this.head);
        console.log(data);
      }
}

const cdll = new CircularDLinkedList()
cdll.add(1,0)
cdll.add(2,1)
cdll.add(3,2)
// cdll.shuffle()
// cdll.print()