class LNode<T> {
  data: T;
  next: LNode<T>;

  constructor(val: T) {
    this.data = val;
    // this.next = null;
  }
}

class LinkedList<T> {
  head: LNode<T>;

  add(val: T) {
    const newNode = new LNode(val);

    // if we don't have 'head'
    if (!this.head) {
      this.head = newNode;
      return;
    }

    // if we have 'head'

    let currentNode = this.head;
    while (currentNode.next !== undefined) {
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;
  }

  print() {
    let currentNode = this.head;
    while (currentNode !== undefined) {
      console.log(`data: ${currentNode.data}, next: ${currentNode.next && currentNode.next.data}`);
      currentNode = currentNode.next;
    }
  }
}

const l = new LinkedList<number>();
l.add(1);
l.add(2);
l.add(3);
l.print();
