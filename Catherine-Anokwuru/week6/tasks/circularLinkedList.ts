class LLNode<T> {
  data: T;
  next: LLNode<T>;

  constructor(val: T) {
    this.data = val;
  }
}

class CLL<T> {
  head: LLNode<T> | null;
  tail: LLNode<T> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(val: T) {
    const newNode = new LLNode(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      // newNode.next = newNode
    } else {
      newNode.next = this.head;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
  }

  print() {
    if (!this.head) {
      console.log("Empty list");
    }

    let currentNode = this.head;
    do {
      console.log(
        `value: ${currentNode!.data}: next: ${currentNode!.next.data}`
      );
      currentNode = currentNode!.next;
    } while (currentNode !== this.head);
    {
    }
  }
}

const item = new CLL<number>();
item.add(1);
item.add(2);
item.add(3);
item.add(4);
item.add(5);

item.print();
