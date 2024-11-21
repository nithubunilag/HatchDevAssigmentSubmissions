class ListNode<T> {
  data: T;
  nextNode: ListNode<T> | null;
  previousNode: ListNode<T> | null;

  constructor(data: T) {
    this.data = data;
    this.nextNode = null;
    this.previousNode = null;
  }
}
class DoublyLinkedList<T> {
  firstNode: ListNode<T> | null;
  lastNode: ListNode<T> | null;

  constructor() {
    this.firstNode = null;
    this.lastNode = null;
  }

  addAtEnd(value: T): void {
    const newNode = new ListNode(value);
    if (this.lastNode) {
      this.lastNode.nextNode = newNode;
      newNode.previousNode = this.lastNode;
      this.lastNode = newNode;
    } else {
      this.firstNode = newNode;
      this.lastNode = newNode;
    }
  }

  addAtBeginning(value: T): void {
    const newNode = new ListNode(value);
    if (this.firstNode) {
      this.firstNode.previousNode = newNode;
      newNode.nextNode = this.firstNode;
      this.firstNode = newNode;
    } else {
      this.firstNode = newNode;
      this.lastNode = newNode;
    }
  }

  removeNode(value: T): void {
    let currentNode = this.firstNode;

    while (currentNode) {
      if (currentNode.data === value) {
        if (currentNode.previousNode) {
          currentNode.previousNode.nextNode = currentNode.nextNode;
        } else {
          this.firstNode = currentNode.nextNode;
        }

        if (currentNode.nextNode) {
          currentNode.nextNode.previousNode = currentNode.previousNode;
        } else {
          this.lastNode = currentNode.previousNode;
        }

        return;
      }
      currentNode = currentNode.nextNode;
    }
  }

  displayList(): void {
    let currentNode = this.firstNode;
    const elements: T[] = [];

    while (currentNode) {
      elements.push(currentNode.data);
      currentNode = currentNode.nextNode;
    }

    console.log(elements.join(" <-> "));
  }
}
const myLinkedList = new DoublyLinkedList<number>();

myLinkedList.addAtEnd(10);
myLinkedList.addAtEnd(20);
myLinkedList.addAtEnd(30);

myLinkedList.displayList();

myLinkedList.addAtBeginning(5);
myLinkedList.displayList();

myLinkedList.removeNode(20);
myLinkedList.displayList();
