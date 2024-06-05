// ======= CLASSWORK ==============
// ===== addition and deletion form the 3 edge cases (doubly linkedlist) ======
//  doubly - assignment
//  implement a circular nodelist (tomorrow) --> add and delete and shuffle(***inplace)...

class LNode {
  data: number;
  next: LNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class singlyLinkedList {
  head: LNode | null;

    constructor() {
      this.head = null;
    }

  // Add a node to the ending of the list (appending...)
  addToEnding(data: number) {
    const newNode = new LNode(data);

    if (this.head === null) {
      this.head = newNode;
      return;
    } else {
      let currNode = this.head;
      while (currNode.next !== null) {
        currNode = currNode.next;
      }
      currNode.next = newNode;
    }
    return newNode;
  }

  // adding to the beginning (preppending...)
  addToBeginning(data: number) {
    const newNode = new LNode(data);
    let currNode = this.head;
    newNode.next = currNode;
    this.head = newNode;
  }

  // Method to add a node at a specified position in the list
  addAtPosition(data: number, position: number) {
    if (position < 0) {
      throw new Error('Position must be a non-negative integer.');
    }

    const newNode = new LNode(data);

    if (position === 0) {
      newNode.next = this.head;
      this.head = newNode;
      return;
    }

    let current = this.head;
    let currentIndex = 0;

    while (current !== null && currentIndex < position - 1) {
      current = current.next;
      currentIndex++;
    }

    if (current === null) {
      throw new Error('Position out of bounds.');
    }

    newNode.next = current.next;
    current.next = newNode;
  }

  // Method to delete a node from the beginning of the list
  deleteFromBeginning() {
    let current = this.head;
    if (current !== null) {
      current = current.next;
      // current = null;
    }
  }
  //********* start ************
  // Method to delete a node from the end of the list
  deleteFromEnd() {
    let current = this.head;
    if (current === null) {
      // empty list
      return;
    }

    if (current.next === null) {
      current = null;
      return;
    }

    while (current.next && current.next.next !== null) {
      current = current.next;
    }
    current.next = null;
  }
  //*********** End ****************
  // Method to delete a node at a specified position in the list
  deleteAtPosition(position: number) {
    if (position < 0 || this.head === null) {
      throw new Error(
        'Position must be a non-negative integer and the list must not be empty.'
      );
    }

    if (position === 0) {
      this.head = this.head.next;
      return;
    }

    let current: LNode | null = this.head;
    let currentIndex = 0;

    while (current !== null && currentIndex < position - 1) {
      current = current.next;
      currentIndex++;
    }

    if (current === null || current.next === null) {
      throw new Error('Position out of bounds.');
    }

    current.next = current.next.next;
  }

  // Method to print the list
  printList() {
    let current = this.head;
    const output: string[] = [];
    while (current !== null) {
      output.push(current.data.toString());
      current = current.next;
    }
    console.log(output.join(' -> ') + ' -> null');
  }
} // final close tag

// ====================== Test cases ==========================
const node = new singlyLinkedList();
node.addToBeginning(3);
node.addToBeginning(5);
node.addToBeginning(7);
node.addToBeginning(13);
node.addToBeginning(55);
node.deleteFromBeginning();

node.printList();

// ============================ End ===============================
