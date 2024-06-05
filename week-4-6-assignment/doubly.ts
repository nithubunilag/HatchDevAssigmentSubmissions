class LNode {
  data: number;
  next: LNode | null;
  prev: LNode | null;

  constructor(data: number) {
      this.data = data;
      this.next = null;
      this.prev = null;
  }
}

class DoublyLinkedList {
  head: LNode | null;
  tail: LNode | null;

  constructor() {
      this.head = null;
      this.tail = null;
  }

  // Method to add a node at the end of the list (appending...)
  add(data: number) {
      const newNode = new LNode(data);
      if (this.tail === null) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          this.tail.next = newNode;
          newNode.prev = this.tail;
          this.tail = newNode;
      }
  }

  // Method to add a node at the beginning of the list
  addAtBeginning(data: number) {
      const newNode = new LNode(data);
      if (this.head === null) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
      }
  }

  // Method to add a node at a specified position in the list
  addAtPosition(data: number, position: number){
      if (position < 0) {
          throw new Error("Position must be a non-negative integer.");
      }

      const newNode = new LNode(data);

      if (position === 0) {
          newNode.next = this.head;
          if (this.head !== null) {
              this.head.prev = newNode;
          }
          this.head = newNode;
          if (this.tail === null) {
              this.tail = newNode;
          }
          return;
      }

      let current = this.head;
      let currentIndex = 0;

      while (current !== null && currentIndex < position - 1) {
          current = current.next;
          currentIndex++;
      }

      if (current === null) {
          throw new Error("Position out of bounds.");
      }

      newNode.next = current.next;
      newNode.prev = current;

      if (current.next !== null) {
          current.next.prev = newNode;
      } else {
          this.tail = newNode;
      }

      current.next = newNode;
  }

  // Method to delete a node from the beginning of the list
  deleteFromBeginning() {
      if (this.head !== null) {
          this.head = this.head.next;
          if (this.head !== null) {
              this.head.prev = null;
          } else {
              this.tail = null;
          }
      }
  }

  // Method to delete a node from the end of the list
  deleteFromEnd() {
      if (this.tail !== null) {
          this.tail = this.tail.prev;
          if (this.tail !== null) {
              this.tail.next = null;
          } else {
              this.head = null;
          }
      }
  }

  // Method to delete a node at a specified position in the list
  deleteAtPosition(position: number) {
      if (position < 0 || this.head === null) {
          throw new Error("Position must be a non-negative integer and the list must not be empty.");
      }

      if (position === 0) {
          this.deleteFromBeginning();
          return;
      }

      let current: LNode | null = this.head;
      let currentIndex = 0;

      while (current !== null && currentIndex < position) {
          current = current.next;
          currentIndex++;
      }

      if (current === null) {
          throw new Error("Position out of bounds.");
      }

      if (current.next !== null) {
          current.next.prev = current.prev;
      } else {
          this.tail = current.prev;
      }

      if (current.prev !== null) {
          current.prev.next = current.next;
      }
  }

  // Method to print the list
  printList(){
      let current = this.head;
      const output: string[] = [];
      while (current !== null) {
          output.push(current.data.toString());
          current = current.next;
      }
      console.log(output.join(" -> ") + " -> null");
  }
}

// Example usage:
const list = new DoublyLinkedList();
list.add(3);
list.add(5);
list.add(13);
list.add(2);
list.printList(); 

list.addAtPosition(10, 2);
list.printList();

list.deleteFromBeginning();
list.printList();

list.deleteFromEnd();
list.printList();

list.deleteAtPosition(1);
list.printList();




