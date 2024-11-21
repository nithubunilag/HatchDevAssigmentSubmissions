class DLNode<T> {
  data: T;
  next: DLNode<T> | null;
  prev: DLNode<T> | null;

  constructor(val: T) {
    this.data = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList<T> {
  head: DLNode<T> | null;

  constructor() {
    this.head = null;
  }

  showList() {
    if (!this.head) {
      console.log("Nothing");
      return;
    }

    let currNode = this.head;
    while (currNode) {
      console.log(currNode.data);
      currNode = currNode.next;
    }
  }

  add(val: T, pos = 0) {
    const newNode = new DLNode(val);
    // if linked list is empty
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // insert at the head
    if (pos == 0) {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      return;
    }

    let count = 0;
    let currNode = this.head;

    while (currNode) {
      if (pos == count + 1) {
        newNode.next = currNode.next;
        newNode.prev = currNode;
        if (currNode.next) {
          currNode.next.prev = newNode;
        }
        currNode.next = newNode;
        return;
      }
      currNode = currNode.next;
      count++;
    }

    // if pos is greater than the length, insert at the end
    currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    currNode.next = newNode;
    newNode.prev = currNode;
  }
}

const doubleList = new DoublyLinkedList<number>();
doubleList.add(3, 0);
doubleList.add(4, 0);
doubleList.add(5, 1); 
doubleList.add(6, 10);
doubleList.showList();
