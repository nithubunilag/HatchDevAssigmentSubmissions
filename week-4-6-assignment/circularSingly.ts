class LNode {
  data: number;
  next: LNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class CircularSinglyLinkedList {
  head: LNode | null;

  constructor() {
    this.head = null;
  }

  // Method to add a lNode at the end of the list
  add(data: number) {
    const newLNode = new LNode(data);
    if (this.head === null) {
      this.head = newLNode;
      newLNode.next = this.head;
    } else {
      let current: any = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newLNode;
      newLNode.next = this.head;
    }
  }

  // Method to add a lNode at the beginning of the list
  addAtBeginning(data: number) {
    const newLNode = new LNode(data);
    if (this.head === null) {
      this.head = newLNode;
      newLNode.next = this.head;
    } else {
      let current: any = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      newLNode.next = this.head;
      this.head = newLNode;
      current.next = this.head;
    }
  }

  // Method to add a lNode at a specified position in the list
  addAtPosition(data: number, position: number) {
    if (position < 0) {
      throw new Error('Position must be a non-negative integer.');
    }

    const newLNode = new LNode(data);

    if (position === 0) {
      this.addAtBeginning(data);
      return;
    }

    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < position - 1 && current!.next !== this.head) {
      current = current!.next;
      currentIndex++;
    }

    if (current!.next === this.head && currentIndex < position - 1) {
      throw new Error('Position out of bounds.');
    }

    newLNode.next = current!.next;
    current!.next = newLNode;
  }

  // Method to delete a lNode from the beginning of the list
  deleteFromBeginning() {
    if (this.head !== null) {
      if (this.head.next === this.head) {
        this.head = null;
      } else {
        let current: any = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = this.head.next;
        this.head = this.head.next;
      }
    }
  }

  // Method to delete a lNode from the end of the list
  deleteFromEnd() {
    if (this.head !== null) {
      if (this.head.next === this.head) {
        this.head = null;
      } else {
        let current: any = this.head;
        while (current.next.next !== this.head) {
          current = current.next;
        }
        current.next = this.head;
      }
    }
  }

  // Method to delete a lNode at a specified position in the list
  deleteAtPosition(position: number) {
    if (position < 0 || this.head === null) {
      throw new Error(
        'Position must be a non-negative integer and the list must not be empty.'
      );
    }

    if (position === 0) {
      this.deleteFromBeginning();
      return;
    }

    let current: LNode | null = this.head;
    let currentIndex = 0;

    while (currentIndex < position - 1 && current!.next !== this.head) {
      current = current!.next;
      currentIndex++;
    }

    if (current!.next === this.head || currentIndex < position - 1) {
      throw new Error('Position out of bounds.');
    }

    current!.next = current!.next!.next;
  }

  // Method to print the list
  printList() {
    if (this.head === null) {
      console.log('The list is empty.');
      return;
    }

    let current = this.head;
    const output: string[] = [];
    do {
      output.push(current.data.toString());
      current = current.next!;
    } while (current !== this.head);
    console.log(output.join(' -> ') + ' -> ... (links back to Node1)');
  }
}

// Example usage:
const list = new CircularSinglyLinkedList();
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
